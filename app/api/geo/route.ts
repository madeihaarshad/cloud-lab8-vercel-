export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // @ts-ignore - geo exists at runtime in Vercel Edge environment
  const { country, city, region } = req.geo || {};
  
  return NextResponse.json({
    country: country || "Only available on production",
    city: city || "Test on your deployed URL",
    region: region || "Not available",
    runtime: "edge",
    timestamp: new Date().toISOString(),
  });
}