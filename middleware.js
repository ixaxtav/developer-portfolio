import { NextResponse } from "next/server";

export function middleware(request) {
  if (
    process.env.NODE_ENV === "production" &&
    request.nextUrl.protocol === "http:"
  ) {
    return NextResponse.redirect(
      `https://${request.nextUrl.host}${request.nextUrl.pathname}`,
      301
    );
  }
}
