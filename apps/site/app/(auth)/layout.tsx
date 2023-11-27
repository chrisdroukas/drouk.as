import { ReactNode } from "react";

import { Navigation } from "@/components/navigation";
import { navigationConfiguration, siteConfiguration } from "#/configuration";

interface AuthLayoutProps {
  children: ReactNode;
}

export const runtime = "edge";

export default async function SiteLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation
        configuration={siteConfiguration}
        navigationItems={navigationConfiguration.navigationItems}
        displayNavigationItems={false}
      />
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
