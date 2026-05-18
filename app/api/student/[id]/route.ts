import { NextResponse } from "next/server";

const data: Record<string, object> = {
  "001": { name: "Ali Ahmed", lab: 8 },
  "002": { name: "Sara Khan", lab: 8 },
};

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  const student = data[params.id];
  if (!student)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(student);
}