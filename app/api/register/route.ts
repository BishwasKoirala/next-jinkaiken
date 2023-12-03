import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

const schema =  z.object({
  studentId : z.string().min(9).max(9),
  name: z.string(),
  email:z.string().email(),
  gakubu:z.string(),
  gakka:z.string(),
  phoneNum:z.string(),
  password : z.string().min(5)
})

export async function POST(request : NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors , {status:400});

  const existingUser = await prisma.user.findUnique({ where : { studentId : body.studentId}})
 
  if (existingUser)
    return NextResponse.json(
      {error : "user already exist"},
      {status: 400}
    )

  const password = await bcrypt.hash(body.password,10 )
  const newUser = await prisma.user.create({
    data: {
      studentId: body.studentId,
      name:body.name,
      email:body.email,
      gakubu:body.gakubu,
      gakka:body.gakka,
      phoneNum:body.phoneNum,
      password
    }
  });

  return NextResponse.json({
    studentId : newUser.studentId,
    name : newUser.name,
    email : newUser.email,
    gakubu:newUser.gakubu,
    gakka:newUser.gakka,
    phoneNum:newUser.phoneNum,
   });
}

export async function GET(request:NextRequest) {
  const users = await prisma.user.findMany({
    select : {
      studentId : true,
      name : true ,
      email : true ,
      gakubu : true ,
      gakka : true ,
      phoneNum : true ,
      
    }
  })
  return NextResponse.json(users)
}

