import { ReactNode } from "react";

import { Footer } from "ui/components/footer";
import { Navigation } from "ui/components/navigation";

import {
  navigationConfiguration,
  siteConfiguration,
} from "../../configuration";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Navigation
            configuration={siteConfiguration}
            navigationItems={navigationConfiguration.navigationItems}
            displayNavigationItems={false}
          />
        </div>
      </header>
      <main className="flex flex-1">{children}</main>
      <Footer configuration={siteConfiguration} />
    </div>
  );
}
