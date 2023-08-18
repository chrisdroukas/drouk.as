import useSWR from "swr";
import { APIResponse } from "ui/types";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export function useAPI<T>(url: string): APIResponse<T> {
  const { data, error } = useSWR<T>(url, fetcher);

  return {
    data,
    error,
    loading: !error && !data,
  };
}
