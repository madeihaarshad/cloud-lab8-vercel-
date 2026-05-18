export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Method 1: Try direct geo property
  const geo1 = (req as any).geo;
  
  // Method 2: Try headers (more reliable)
  const countryHeader = req.headers.get("x-vercel-ip-country");
  const cityHeader = req.headers.get("x-vercel-ip-city");
  const regionHeader = req.headers.get("x-vercel-ip-country-region");
  
  // Use whichever method provides data
  const country = geo1?.country || countryHeader || "Not detected";
  const city = geo1?.city || cityHeader || "Not detected";
  const region = geo1?.region || regionHeader || "Not detected";
  
  return NextResponse.json({
    country: country,
    city: city,
    region: region,
    runtime: "edge",
    method: geo1?.country ? "geo-object" : "headers",
    all_headers: {
      // Debug: see all available headers
      country_header: countryHeader,
      city_header: cityHeader,
      region_header: regionHeader,
    },
    timestamp: new Date().toISOString(),
  });
}
