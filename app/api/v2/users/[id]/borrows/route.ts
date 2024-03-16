// fetch burrows of certain student
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// fetches books that a user has rented
export async function GET(request : NextRequest , {params} : {params : {id : string}}) {
  const records = await prisma.bookRecords.findMany({
    // studentId is string here
    where : { studentId : params.id, returned : false}, 
    select : {
      id : true,
      studentId : true,
      bookId : true,
      returned : true,
      burrowed_at : true,
      storeBooks : {
        select : {
          title : true
        }
      }

    }
  })

  if (!records)
    return NextResponse.json({error : 'record not found'} , {status : 404})

  const modifiedRecords = records.map(record => ({
    id : record.id ,
    studentId : record.studentId,
    bookId : record.bookId,
    burrowed_at : record.burrowed_at,
    bookTitle : record.storeBooks.title,
    // 無理やりなう
    returned : "false"
  }))
  
  return NextResponse.json(modifiedRecords)
}