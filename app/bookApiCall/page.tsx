'use client'
import React, { useEffect } from 'react'



const page = () => {


  useEffect(() => {

    const param : string = "9784534045843"

    const getData = async () => {
      const query = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${param}`)

      const responsedata = await query.json()

      console.log('response from API' , responsedata)

    }

    getData()

  },[])

  


  return (
    <h3>hello</h3>
  )
}

export default page