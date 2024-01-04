import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const mydbBooks = await prisma.storeBooks.findMany();
  return NextResponse.json(mydbBooks);
}