import useSWR from "swr";
import { ZodType } from "zod";
import { APIResponse } from "@/types";

const fetcher = async <T>(url: string, schema: ZodType<T>) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return schema.parse(data);
};

export function useAPI<T>(url: string, schema: ZodType<T>): APIResponse<T> {
  const { data, error } = useSWR<T>(url, (url: string) => fetcher(url, schema));

  return {
    data,
    error,
    loading: !error && !data,
  };
}
