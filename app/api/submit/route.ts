import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, roll } = await req.json();
  if (!name || !roll)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  return NextResponse.json({
    success: true,
    message: `Received from ${name} (${roll})`,
  });
}