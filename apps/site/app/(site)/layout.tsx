import { ReactNode } from "react";

import { Navigation } from "ui/components/navigation";
import { Footer } from "ui/components/footer";

import {
  siteConfiguration,
  navigationConfiguration,
} from "../../configuration";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex items-center justify-between py-6">
          <Navigation
            configuration={siteConfiguration}
            navigationItems={navigationConfiguration.navigationItems}
          />
        </div>
      </header>
      <main className="flex flex-1">{children}</main>
      <Footer configuration={siteConfiguration} />
    </div>
  );
}
