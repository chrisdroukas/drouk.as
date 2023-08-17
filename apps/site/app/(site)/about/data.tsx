"use client";
import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export function Resume() {
  const { data, error, isLoading } = useSWR("/api/resume", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.basics.name}!</div>;
}
