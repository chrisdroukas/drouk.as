"use client";
import { useResume } from "app/api/resume/use-resume";

export function Resume() {
  const { resume, loading, error } = useResume();

  if (error) return <div>failed to load</div>;
  if (loading) return <div>loading...</div>;

  const renderWork = resume?.work?.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.position}</p>
    </div>
  ));

  return <div>{renderWork}</div>;
}
