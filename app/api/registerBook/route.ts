import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"
import prisma from "@/prisma/client";

const schema = z.object({
  isbn13 : z.string()
})

export async function POST ( request : NextRequest ) {
  
    const body = await request.json()
    const validationResult = schema.safeParse(body)

    if (!validationResult.success) {
      // Handle validation failure
      // You might want to return a 400 Bad Request response here
      return new NextResponse(JSON.stringify({ error: "Invalid input" }), { status: 400 });
    }
  
    // Extract isbn13 from the validation result
    const { isbn13 } = validationResult.data;
  
    // Fetch data from the API
    // need productionmode and production mode
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000'
    const isbnResponse = await fetch(`${baseUrl}/api/googleGetBookApi/${isbn13}`);
    const gotdata = await isbnResponse.json();

    // post to prisma 
    const newdata = await prisma.storeBooks.create({
      data : {
        id : gotdata.id,
        isbn13 : gotdata.isbn13,
        isbn10 : gotdata.isbn10,
        title : gotdata.title,
        authors : gotdata.authors,
      }
    })
    
    // Return the fetched data
    return  (
      NextResponse.json(newdata)
    )
}
    
  

