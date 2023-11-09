import { Resume, ResumeType } from "#/app/api/schemas/resume";
import { useAPI } from "#/app/api/use-api";

export function useResume() {
  const { data, error, loading } = useAPI<ResumeType>("/api/resume", Resume);

  return {
    resume: data,
    error,
    loading,
  };
}
