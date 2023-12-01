import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

const schema =  z.object({
  studentId : z.string().min(9).max(9),
  bookName : z.string(),
  rentStatus : z.string()
  
})

export async function POST(request : NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors , {status:400});

  const record = await prisma.bookRecords.create({
    data: {
      studentId: body.studentId,
      bookName: body.bookName,
      rentStatus : body.rentStatus
    }
  });

  return NextResponse.json({
    studentId : record.studentId,
    bookName:record.bookName,
    rentStatus : record.rentStatus
   });
}

export async function GET(request:NextRequest) {
  const records = await prisma.bookRecords.findMany({
    select : {
      studentId : true,
      name : true ,
      bookName : true ,
      rentStatus : true ,
      transactionAt : true ,
    }
  })
  return NextResponse.json(records)
}

