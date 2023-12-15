
import React, { useEffect , useState } from 'react'

interface GotBookData {
  id : string , 
  title : string,
  isbn10 : string,
  isbn13 : string
}

const GetData = () => {
    const [bookData, setBookData] = useState<GotBookData| null>(null);

    useEffect(() => {
  
      const getData = async ( param : string) => {
        try{
        const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${param}`)
        const responsedata  = await query.json()
  
        const catchdata : GotBookData = {
          id : responsedata.items[0].id,
          title: responsedata.items[0].volumeInfo.title,
          isbn10 : responsedata.items[0].volumeInfo.industryIdentifiers[0].identifier,
          isbn13 : responsedata.items[0].volumeInfo.industryIdentifiers[1].identifier
        }

        setBookData(catchdata)
  
        
  
        if (query.ok) {
          console.log('response from API' , responsedata)
          // setBookData(responsedata.items);
          console.log(catchdata)
  
  
        } else {
          throw new Error (`Error fetching data: ${query.status}`)
        }
        } catch (error) {
          console.error('failed to fetch',error)
        }
      }
  
      getData("9784534045843")
  
    },[])
  return (
    <div>
      {bookData ? (
        <div>
          <h1>{bookData.title}</h1>
          <p>ID: {bookData.id}</p>
          <p>ISBN-10: {bookData.isbn10}</p>
          <p>ISBN-13: {bookData.isbn13}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GetData