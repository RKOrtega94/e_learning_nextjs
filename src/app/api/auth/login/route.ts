import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}

export function POST() {
  return NextResponse.json({ message: "Login..." });
}
