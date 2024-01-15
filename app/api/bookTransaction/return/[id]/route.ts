import { NextRequest, NextResponse } from "next/server";
// import schema from '../schema'
import prisma from "@/prisma/client";
import { error } from "console";

export async function PUT(request : NextRequest , {params} : {params : {id : string}}) {
  // const body = await request.json();
  // const validation = schema.safeParse(body)

  // if (!validation.success)
  //   return NextResponse.json(validation.error.errors, {status : 400})

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