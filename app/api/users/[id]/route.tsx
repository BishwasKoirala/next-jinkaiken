import { NextRequest, NextResponse } from "next/server";

interface Props {
  param : {id : number }
}

export function GET(
  request:NextRequest,
  {params} : { params:{id: number}}) {
    if (params.id > 10){
      return NextResponse.json({error: 'user not found'}, {status : 404})
    } else {
    return NextResponse.json({id :1 , name : 'mosh'})
  }
} 

export async function PUT(
  request:NextRequest,
  {params} : { params:{id: number}}) {
  // validate requset body  
  const body = await request.json();
  // if invalid return 404
  if (!body.name)
    return NextResponse.json({ error : "Name is required"},{status : 404})
  // if valid , then fetch with given user id
  
  // if doest exist return 404
  if(params.id > 10 )
  return NextResponse.json({error: "user not found"},{status : 404})
  // otherwise, update the userdata and return

  return NextResponse.json({id :1,name :body.name})

}

export function DELETE(
  request:NextRequest,
  {params} : { params:{id: number}}
) {
  // fetch the use from db
  // if not found the n404  error
  if (params.id >10) 
    return NextResponse.json({error : 'user not found'},{status: 404})
  // otherwise delete user 
  return NextResponse.json({});
  // areturn 201
}

