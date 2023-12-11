'use client'
import React, { useEffect , useState } from 'react'

interface GoogleBookResponse {
  items : Array<{
    id : string ,
    volumeInfo : {
      title : string
    }
  }>
}


const page = () => {

  const [bookData, setBookData] = useState<GoogleBookResponse['items'] | null>(null);

  useEffect(() => {

    const param : string = "9784534045843"

    const getData = async () => {

      try{
      const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${param}`)
      const responsedata : GoogleBookResponse = await query.json()

      if (query.ok) {
        console.log('response from API' , responsedata)
        setBookData(responsedata.items);


      } else {
        throw new Error (`Error fetching data: ${query.status}`)
      }
      } catch (error) {
        console.error('failed to fetch',error)
      }
    }

    getData()

  },[])


  // console.log(setBookData)
  // console.log(bookData)

  return (
    <h3>hello</h3>
  )
}

export default page