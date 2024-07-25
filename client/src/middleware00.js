import { NextResponse } from "next/server";

// // add paths in matcher to run middleware on these paths
// const PUBLIC_URLS = ["/auth/login"];
// const HYBRID_URLS = ["/about-us"];
// const LOGIN_URL = ["/auth/login"];

// export default function validateAuthentication(req) {
//   let tokenExists = req.cookies.get("token");
//   let { pathname } = req.nextUrl;

//   if (pathname.startsWith("/_next") || pathname.includes("/favicon.ico")) {
//     return NextResponse.next();
//   }

//   // if user requested hybrid routes
//   if (HYBRID_URLS.some((url) => pathname.startsWith(url))) {
//     return NextResponse.next();
//   }

//   //   if not logged-in requested protected routes
//   if (!tokenExists && !PUBLIC_URLS.some((url) => pathname.startsWith(url))) {
//     // can add function here to validate token from server

//     req.nextUrl.pathname = LOGIN_URL;
//     return NextResponse.redirect(req.nextUrl);
//   }

//   return NextResponse.next();
// }

//  export const config = {
//   matcher: ["/", "/about-us", "/auth/login", "/users", "/users/:path?"],
// };
