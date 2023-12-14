
import React, { useEffect , useState } from 'react'

interface GotBookData {
  id : string , 
  title : string,
  isbn10 : string,
  isbn13 : string
}

const GetData = () => {
    // const [bookData, setBookData] = useState<GoogleBookResponse['items'] | null>(null);

    useEffect(() => {

      const param : string = "9784534045843"
  
      const getData = async () => {
  
        try{
        const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${param}`)
        const responsedata  = await query.json()
  
         const catchdata : GotBookData = {
          id : responsedata.items[0].id,
          title: responsedata.items[0].volumeInfo.title,
          isbn10 : responsedata.items[0].volumeInfo.industryIdentifiers[0].identifier,
          isbn13 : responsedata.items[0].volumeInfo.industryIdentifiers[1].identifier
        }
  
        
  
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
  
      getData()
  
    },[])
  return (
    <div>GetData</div>
  )
}

export default GetData