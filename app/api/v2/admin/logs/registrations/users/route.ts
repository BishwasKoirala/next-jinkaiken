import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
//  user registered access history in recent order
export async function GET(request: NextRequest) {
  const response = await prisma?.user.findMany({
    select: {
      studentId: true,
      name: true,
      email: true,
      gakubu: true,
      gakka: true,
      phoneNum: true,
      isAdmin: true,
      registered_at: true,
    },
    orderBy: {
      registered_at: "desc",
    },
  });

  if (!response) {
    return NextResponse.json({ error: "response not found" }, { status: 404 });
  }

  return NextResponse.json(response);
}
