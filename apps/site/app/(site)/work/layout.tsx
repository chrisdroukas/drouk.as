import { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { navigationConfiguration, siteConfiguration } from "#/configuration";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function GenericLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation
        configuration={siteConfiguration}
        navigationItems={navigationConfiguration.navigationItems}
      />
      <main className="flex-1">{children}</main>
      <Footer configuration={siteConfiguration} />
    </div>
  );
}
