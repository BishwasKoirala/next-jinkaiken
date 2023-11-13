import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
export function GET(request:NextRequest) {
  return NextResponse.json([
    {
      id : 1,
      schoolNum:2002201442,
      name : "Bishwas Koirala",
      book : "love and war",
      renting : true,
      returnDate : undefined
    },
    {
      id: 2,
      schoolNum:202201442,
      name : "Bishwas Koirala",
      book : "love and war",
      renting : false,
      returnDate : "2022-08-15"
    }
  ])
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
    schoolNum : body.schoolNum,
    name : body.name,
    book : body.book,
    renting : body.renting,
    returnDate : JapanTime
  },{status : 201}
  )
  

}