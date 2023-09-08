import { ReactNode } from "react";

interface PostProps {
  children: ReactNode;
}

export const runtime = "nodejs";

export default async function Post({ children }: PostProps) {
  return <>{children}</>;
}
