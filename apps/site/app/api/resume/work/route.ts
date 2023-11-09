import { NextResponse } from "next/server";

import { data } from "#/app/api/resume/data";

export async function GET() {
  if (data.work) {
    return NextResponse.json(data.work);
  }
}
