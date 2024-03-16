import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// fetches all the book that are rentable
export async function GET(request : NextRequest) {
  const books = await prisma.storeBooks.findMany({
    where : {rentable : true},
    select : {
      id : true , 
      title : true
    }
  })

  return NextResponse.json(books)
}