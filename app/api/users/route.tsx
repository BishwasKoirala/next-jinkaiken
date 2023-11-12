import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest) {
  return NextResponse.json([
    {id : 1,name : 'Mosh'},
    {id : 2,name : 'John'},

  ]);
}

// あえてrequest を requesrw　にしてます
export async function POST(request:NextRequest) {
  const body = await request.json();
  // validateit , if valit 200, invalid 400
  if (!body.name){
    return NextResponse.json({error : 'Name is required'}, { status : 400}) 
  }
  return NextResponse.json({id :1 , name : body.name},{status:201});
}