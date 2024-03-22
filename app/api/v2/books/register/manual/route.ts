import { NextResponse , NextRequest } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";
import { randomStringId } from "@/app/api/components/utils";


const schema = z.object({
  id : z.string().optional(),
  title : z.string(),
  authors : z.string(),
})

export async function POST(request : NextRequest) {
  const body = await request.json()
  const validation = schema.safeParse(body)

  if(!validation.success) {
    return new NextResponse(JSON.stringify({error : "invalid input"}) , {status : 400})
  }

  let randomString = randomStringId(5)

  const newBook = await prisma.storeBooks.create({
    data : {
      id : randomString,
      title : body.title,
      authors : body.title
    }
  })

  return (
    NextResponse.json(newBook)
  )
}
