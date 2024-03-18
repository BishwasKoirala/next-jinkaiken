import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

// api components inport
import  jpDate  from "@/app/api/components/jpDate";
import { title } from "process";


// studentId and bookId is enough to burrow
// 
const schema =  z.object({
  studentId : z.string().min(9).max(9),
  bookId : z.string()
  // returned_at : z.null()
})

export async function POST(request : NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors , {status:400});


  const isRentable = await prisma.storeBooks.findUnique({
    where : {id : body.bookId},
    select : {
      rentable : true //means select this field
    }
  })

  if (!isRentable || isRentable.rentable === false) 
    return NextResponse.json({error : 'book is rented by someone'} , {status : 400})
  // Do note fetchc if the book is not rentable
  

  // make date of japan
  const nowjpDate = jpDate()

  const record = await prisma.bookRecords.create({
    data: {
      studentId: body.studentId,
      bookId: body.bookId,
      burrowed_at: new Date(nowjpDate)
    }
  });
  
  
  const bookStateUpdate = await prisma.storeBooks.update({
    where : { id : body.bookId },
    data : {
      rentable : false
    }
  })
  // return the book name in response
  const bookTitle = await prisma.storeBooks.findUnique({
    where : {id : record.bookId},
    select : {
      id : true,
      title : true
    }
  })

  return NextResponse.json({
    studentId : record.studentId,
    bookId:record.bookId,
    title : bookTitle?.title,
    burrowed_at: record.burrowed_at,
    rentableStateUpdate : bookStateUpdate.rentable
   });
}

export async function GET(request:NextRequest) {
  const records = await prisma.bookRecords.findMany({
    select : {
      id : true ,
      studentId : true,
      bookId : true,
      burrowed_at : true,
      returned : true,
      returned_at : true,

    }
  })
  return NextResponse.json(records)
}
