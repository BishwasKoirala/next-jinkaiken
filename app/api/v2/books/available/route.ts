import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// it fix the not refetching available books in borrowbooks
export const dynamic = 'force-dynamic'

// fetches all the book that are rentable
export async function GET(request : NextRequest , response : NextResponse) {
  const books = await prisma.storeBooks.findMany({
    where : {rentable : true},
    select : {
      id : true , 
      title : true
    }
  })

  return NextResponse.json(books)
}