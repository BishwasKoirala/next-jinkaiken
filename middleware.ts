import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
  return NextResponse.redirect(new URL('/new-page',request.url))
}

export const config = {
  matcher : ['/users:id']
}



// export {default} from "next-auth/middleware";


// export const config = {
//   // *: zero or more params
//   // + : one or more
//   // ?: zero or one
//   matcher : ['/dashboard/:path*']
// }