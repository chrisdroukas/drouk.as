import { ReactNode } from "react";
import { SiteLayout } from "@/components/layouts";
import { siteConfiguration } from "#/configuration";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <SiteLayout footer={{ configuration: siteConfiguration }}>
      {children}
    </SiteLayout>
  );
}
