import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
//returns registered Books in recent order
export async function GET(request: NextRequest) {
  const response = await prisma?.storeBooks.findMany({
    select: {
      id: true,
      isbn13: true,
      isbn10: true,
      title: true,
      authors: true,
      rentable: true,
      registered_at: true,
    },
    orderBy: {
      registered_at: "desc",
    },
  });

  if (!response) {
    return NextResponse.json(
      {
        error: "response not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(response)
}
