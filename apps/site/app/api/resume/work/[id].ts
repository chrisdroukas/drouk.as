import { NextResponse } from "next/server";
import { data } from "#/app/api/resume/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const work = data.work?.filter((work) => work.id === id);

  if (work && work.length > 0) {
    return NextResponse.json(work[0]);
  }
}
