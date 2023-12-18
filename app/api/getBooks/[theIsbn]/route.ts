// import { NextRequest } from "next/server"



// // let theIsbn = '9784534045843'
// // let gotData : any ; //get the processed object here

// export async function GET(request : NextRequest,{params} : {params : {theIsbn : string}}) {
//   interface FilteredData {
//     id : string , 
//     title : string,
//     isbn10 : string,
//     isbn13 : string
//   }

//   const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${params}`)

//   const holdQuery  = await query.json()

//   const filterData : FilteredData = {
//     id : holdQuery.items[0].id,
//         title: holdQuery.items[0].volumeInfo.title,
//         isbn10 : holdQuery.items[0].volumeInfo.industryIdentifiers[0].identifier,
//         isbn13 : holdQuery.items[0].volumeInfo.industryIdentifiers[1].identifier
//   } 

//   console.log(filterData)
//   return Response.json(filterData)

// }



//////fixed by mr.gpt
import { NextRequest } from "next/server";

interface FilteredData {
  id: string,
  title: string,
  isbn10?: string,
  isbn13?: string
}

interface IndustryIdentifiers{
  type : string,
  identifier : string
}

export async function GET(request: NextRequest, { params }: { params: { theIsbn: string } }) {
  

  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${params.theIsbn}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      throw new Error('No book found for the given ISBN');
    }

    const book = data.items[0];
    const filterData: FilteredData = {
      id: book.id,
      title: book.volumeInfo.title,
      isbn10: book.volumeInfo.industryIdentifiers.find((identifier : IndustryIdentifiers) => identifier.type === 'ISBN_10')?.identifier,
      isbn13: book.volumeInfo.industryIdentifiers.find((identifier : IndustryIdentifiers) => identifier.type === 'ISBN_13')?.identifier
    };

    return new Response(JSON.stringify(filterData), {
      headers: {
        'Content-Type': 'application/json',
      }
      ,
    });
  } catch (error) {

    console.error(error);
    return new Response(JSON.stringify({ error}), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}


