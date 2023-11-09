"use client";

import { WorkCard } from "@/components/cards/work-card";
import { useResume } from "#/app/api/resume/use-resume";

export function Resume() {
  const { resume, loading, error } = useResume();

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  const renderWork = resume?.work?.map((item) => (
    <WorkCard
      key={item.id}
      name={item.name}
      description={item.description}
      position={item.position}
      url={item.url}
    />
  ));

  return <div className="grid gap-4">{renderWork}</div>;
}
