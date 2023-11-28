export {default} from "next-auth/middleware";


export const config = {
  // *: zero or more params
  // + : one or more
  // ?: zero or one
  matcher : ['/dashboard/:path*']
}