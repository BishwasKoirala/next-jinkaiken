import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'


// studentId and bookId is enough to burrow
// 
const schema =  z.object({
  studentId : z.string().min(9).max(9),
  bookId : z.string()
  // returnedDate : z.null()
})

export async function POST(request : NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors , {status:400});

  const record = await prisma.bookRecords.create({
    data: {
      studentId: body.studentId,
      bookId: body.bookId,
    }
  });

  return NextResponse.json({
    studentId : record.studentId,
    bookId:record.bookId,
   });
}

export async function GET(request:NextRequest) {
  const records = await prisma.bookRecords.findMany({
    select : {
      id : true ,
      studentId : true,
      bookId : true,
      burrowDate : true,
      returned : true,
      returnedDate : true,

    }
  })
  return NextResponse.json(records)
}
