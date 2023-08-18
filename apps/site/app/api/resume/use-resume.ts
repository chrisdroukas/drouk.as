import { Resume } from "../schemas/resume";
import { useAPI } from "../use-api";

export function useResume() {
  const { data, error, loading } = useAPI<Resume>("/api/resume");

  return {
    resume: data,
    error,
    loading,
  };
}
