
interface FilteredData {
    id : string , 
    title : string,
    isbn10 : string,
    isbn13 : string
  }

let theIsbn = '9784534045843'
// let gotData : any ; //get the processed object here

export async function GET(request : Request) {
  

  const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${theIsbn}`)

  const holdQuery  = await query.json()

  const filterData : FilteredData = {
    id : holdQuery.items[0].id,
        title: holdQuery.items[0].volumeInfo.title,
        isbn10 : holdQuery.items[0].volumeInfo.industryIdentifiers[0].identifier,
        isbn13 : holdQuery.items[0].volumeInfo.industryIdentifiers[1].identifier
  } 

  console.log(filterData)
  return Response.json(filterData)

}


