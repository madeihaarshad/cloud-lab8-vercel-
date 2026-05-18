export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Access geo data from the request
  const geo = req.geo;
  
  return NextResponse.json({
    country: geo?.country || "Not available",
    city: geo?.city || "Not available",
    region: geo?.region || "Not available",
    latitude: geo?.latitude || null,
    longitude: geo?.longitude || null,
    runtime: "edge",
    note: "Geo data is only available on Vercel production deployment"
  });
}