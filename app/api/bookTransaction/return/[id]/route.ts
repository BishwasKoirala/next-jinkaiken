import { NextRequest, NextResponse } from "next/server";
// import schema from '../schema'
import prisma from "@/prisma/client";
import { error } from "console";


// the id here is : id row of bookRecords Table
export async function PUT(request : NextRequest , {params} : {params : {id : string}}) {

  const record = await prisma.bookRecords.findUnique({
    where : {id : parseInt(params.id)}
  })

  if (!record) 
    return NextResponse.json({error : 'record not found'} , {status : 404})

  const updatedRecord = await prisma.bookRecords.update({
    where : {id : record.id},
    data : {
      returned : true,
      returned_at : new Date()
    }
  })

  return NextResponse.json(updatedRecord)

  
}