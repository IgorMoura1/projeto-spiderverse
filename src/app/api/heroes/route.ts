import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/heroes`);
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch heroes' }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
