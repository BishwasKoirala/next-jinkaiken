import { NextRequest, NextResponse } from "next/server";
import putSchema from "../putSchema";
import prisma from "@/prisma/client";
import { string } from "zod";

interface Props {
  param : {id : number }
}

export async function GET(
  request:NextRequest,
  {params} : { params:{id: string}}) {
    
    const clubMember = await prisma.clubMember.findUnique({
      where: { id : parseInt(params.id) }
    });

    if (!clubMember)
      return NextResponse.json({error: 'user not found'}, {status : 404})
    
    return NextResponse.json(clubMember)
  
} 

export async function PUT(
  request:NextRequest,
  {params} : { params:{id: string}}
  ) {
  const body = await request.json();
  const validation = putSchema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors)

  const clubMember = await prisma.clubMember.findUnique({
    where : {id : parseInt(params.id)}
  });

  // if doest exist return 404
  if(!clubMember)
    return NextResponse.json({error: "user not found"},{status : 404})
  // otherwise, update the userdata and return

  const updatedClubMember =  await prisma.clubMember.update({
    where : {id : clubMember.id},
    data : {
      schoolYear : body.schoolYear,
      role : body.role
    }
  })

  return NextResponse.json({updatedClubMember})

}

export async function DELETE(
  request:NextRequest,
  {params} : { params:{id: string}}
) {
   const clubMember = await prisma.clubMember.findUnique({
      where : {id : parseInt(params.id) }
    })

  if (!clubMember) 
    return NextResponse.json({error : 'user not found'},{status: 404})

    await prisma.clubMember.delete({
      where : { id : clubMember.id}
    });
  // otherwise delete user 
  return NextResponse.json({});
  // areturn 201
}

