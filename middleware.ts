import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(
  function middleware(req: any) {
    const route = req.nextUrl.pathname;
    //redirect to the dashboard when already loggedin
    if (route === "/") {
      if (req.nextauth.token) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
      }
    }
    //redirect to the login page when not loggedin
    else if (route === "/dashboard") {
      if (!req.nextauth.token) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
      }
    } else {
      return NextResponse.next();
    }
  },
  {
    //explicitly authorizing every request to allow the middlware to check/filter
    callbacks: {
      authorized: () => true,
    },
  },
);
export const config = { matcher: ["/dashboard", "/"] };
