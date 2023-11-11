import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { siteConfiguration } from "#/configuration";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      <Footer configuration={siteConfiguration} />
    </div>
  );
}
