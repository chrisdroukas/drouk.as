import { NextResponse } from "next/server";
import { data } from "./data";

export async function GET() {
  return NextResponse.json(data);
}
