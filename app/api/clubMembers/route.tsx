import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

 export async function GET(request:NextRequest) {
  const clubMember = await prisma.clubMember.findMany();

  return NextResponse.json(clubMember);
  
}

// あえてrequest を requesrw　にしてます
export async function POST(request:NextRequest) {
  const body = await request.json();
  // validateit , if valit 200, invalid 400
  const validation =  schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status : 400}) 
  
  const clubMember = await prisma.clubMember.create({
    data : {
      // id : but willbe deafultly auto generated
      studentNum : body.studentNum,
      name : body.name,
      jindaiMail : body.jindaiMail,
      schoolYear : body.schoolYear,
      // role : is set deafult to member
      
    }
  })
  return NextResponse.json(clubMember , {status : 201});
}