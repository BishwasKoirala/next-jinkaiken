import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = await prisma?.bookRecords.findMany({
    select: {
      id: true,
      studentId: true,
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
    studenId: response.studentId,
    book: response.storeBooks.title,
    returned: response.returned,
    brrowed_at: response.burrowed_at,
    returned_at: response.returned_at,
  }));

  return NextResponse.json(filteredResponse);
}
