import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
  const response = await prisma?.bookRecords.findMany({
    select: {
      id: true,
      studentId: true,
      user : {
        select : {
          name : true
        }
      },
      storeBooks: {
        select: {
          title: true,
        },
      },
      returned: true,
      burrowed_at: true,
      returned_at: true,
    },
    orderBy: {
      burrowed_at: "desc",
    },
  });
  if (!response) {
    return NextResponse.json({ error: "response not found" }, { status: 404 });
  }

  const filteredResponse = response.map((response) => ({
    id: response.id,
    studentId: response.studentId,
    studentName : response.user.name,
    book: response.storeBooks.title,
    returned: response.returned,
    burrowed_at: response.burrowed_at,
    returned_at: response.returned_at,
  }));

  return NextResponse.json(filteredResponse);
}
