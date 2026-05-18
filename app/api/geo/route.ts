export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({
    country: req.geo?.country || "Only available on production",
    city: req.geo?.city || "Test on your deployed URL",
    runtime: "edge",
  });
}