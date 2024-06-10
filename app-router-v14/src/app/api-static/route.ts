import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const res = await fetch("http://localhost:8080/", {
    cache: "no-store",
  });
  const { time } = await res.json();

  return NextResponse.json({ time });
}
