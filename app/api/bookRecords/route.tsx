import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

// read the records from bookRecord Table
export async function GET(request:NextRequest) {
  const bookRecord = await prisma.bookRecord.findMany();

  return NextResponse.json(bookRecord);
}


// post records in bookRecord table
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) 
    return NextResponse.json(validation.error.errors,{status : 400});

    // check if the club member exist , fron clubMemberTable
  const isClubMember = await prisma.clubMember.findUnique({
    where : {
      id : body.memberId
      // id in clubMember must match to given memberId
    }
  });

  if (!isClubMember)
    return NextResponse.json({error : 'you must be a club member to rent the book'});

  const bookRecord = await prisma.bookRecord.create({
    data : {
      bookName : body.bookName,
      memberId : body.memberId,
      rentStatus : body.rentStatus
    }
  })
  
  return NextResponse.json(
   bookRecord,{status : 201}
  )
}