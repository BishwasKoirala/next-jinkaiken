import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

// api components inport
import  jpDate  from "@/app/api/components/jpDate";


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

  return NextResponse.json({
    studentId : record.studentId,
    bookId:record.bookId,
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
