import { ReactNode } from "react";
import { SiteLayout } from "@/components/layouts";

export default async function Layout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
