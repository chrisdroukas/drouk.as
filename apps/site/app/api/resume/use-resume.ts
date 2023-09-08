import { Resume, ResumeType } from "../schemas/resume";
import { useAPI } from "../use-api";

export function useResume() {
  const { data, error, loading } = useAPI<ResumeType>("/api/resume", Resume);

  return {
    resume: data,
    error,
    loading,
  };
}
