import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

const schema =  z.object({
  studentId : z.string().min(9).max(9),
  name: z.string(),
  email:z.string().email(),
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
      password
    }
  });

  return NextResponse.json({
    studentId : newUser.studentId,
    name : newUser.name,
    email : newUser.email,
   });
}