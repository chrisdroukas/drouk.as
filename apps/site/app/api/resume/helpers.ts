import { apiEnvironment } from "../env";

export async function getResumeData() {
  const res = await fetch(`${apiEnvironment()}/resume`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
