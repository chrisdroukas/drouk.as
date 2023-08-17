import { ReactNode } from "react";

import { Footer } from "ui/components/footer";
import { Navigation } from "ui/components/navigation";

import {
  navigationConfiguration,
  siteConfiguration,
} from "../../configuration";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Navigation
            configuration={siteConfiguration}
            navigationItems={navigationConfiguration.navigationItems}
          />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer configuration={siteConfiguration} />
    </div>
  );
}
