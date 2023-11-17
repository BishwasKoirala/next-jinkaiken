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
  
  if (!validation.success){
    return NextResponse.json(validation.error.errors, { status : 400}) 
  }
  return NextResponse.json({id :1 , name : body.name},{status:201});
}