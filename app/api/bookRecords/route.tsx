import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request:NextRequest) {
  const bookRecords = await prisma.bookRecord.findMany();

  return NextResponse.json(bookRecords);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) 
    return NextResponse.json(validation.error.errors,{status : 400});

  const nowJapanTime = Date.now();
  const JapanTime = new Date(nowJapanTime).toLocaleDateString("en-Us",{timeZone: "Asia/Tokyo"})
  
  return NextResponse.json({
    id : 10 ,
    studentNum : body.studentNum,
    name : body.name,
    book : body.book,
    renting : body.renting,
    returnDate : JapanTime
  },{status : 201}
  )
  

}