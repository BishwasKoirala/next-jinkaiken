import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from 'bcrypt'

const schema =  z.object({
  studentId : z.string().min(9).max(9),
  password : z.string().min(5)
})

export async function POST(request : NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors , {status:400});

  const user = await prisma.user.findUnique({ where : { studentId : body.studentId}})
 
  if (user)
    return NextResponse.json(
      {error : "user already exist"},
      {status: 400}
    )

  const hashedPassword = await bcrypt.hash(body.password,10 )
  const newUser = prisma.user.create({
    data: {
      studentId: body.studentId,
      hashedPassword: body.hashedPassword
    }
  });

  return NextResponse.json({ studentId : (await newUser).studentId,
  hashedPassword : (await newUser).hashedPassword },
  
  )
}