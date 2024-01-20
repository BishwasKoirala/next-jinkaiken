// fetch
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest , {params} : {params : {id : string}}) {
  const records = await prisma.bookRecords.findMany({
    // studentId is string here
    where : { studentId : params.id, returned : false}, 
    select : {
      id : true,
      studentId : true,
      bookId : true,
      burrowed_at : true

    }
  })

  if (!records)
    return NextResponse.json({error : 'record not found'} , {status : 404})

  return NextResponse.json(records)
}