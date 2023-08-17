import { NextResponse } from "next/server";
import { data } from "./data";
import { apiEnvironment } from "../env";

export async function GET() {
  return NextResponse.json(data);
}

export async function getResumeData() {
  const res = await fetch(`${apiEnvironment()}/resume`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
