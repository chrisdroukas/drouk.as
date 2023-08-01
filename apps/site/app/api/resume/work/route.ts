import { NextResponse } from "next/server";
import { data } from "../data";

export async function GET() {
  if (data.work) {
    return NextResponse.json(data.work);
  }
}
