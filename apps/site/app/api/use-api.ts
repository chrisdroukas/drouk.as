import useSWR from "swr";

const fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export function useAPI<T>(url: string) {
  const { data, error } = useSWR<T>(url, fetcher);

  return {
    data,
    error,
    loading: !error && !data,
  };
}
