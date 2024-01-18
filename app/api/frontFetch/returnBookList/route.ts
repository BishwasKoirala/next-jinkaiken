import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { useSession } from "next-auth/react";

export async function GET(request : NextRequest) {
  const books = await prisma.storeBooks.findMany({
    select : {
      id : true , 
      title : true
    }
  })

  return NextResponse.json(books)
}