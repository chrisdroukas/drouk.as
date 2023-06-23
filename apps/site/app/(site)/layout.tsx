import { ReactNode } from "react";
import Link from "next/link";

import { classnames } from "ui/library/utilities/classnames";
import { buttonVariants } from "ui/components/button";
import { Navigation } from "ui/components/navigation";
// import { SiteFooter } from "@/components/site-footer";

import { mainConfiguration } from "../../configuration/main";

interface SiteLayoutProps {
  children: ReactNode;
}

export default async function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Navigation
            configuration={{
              name: "drouk.as/",
              description: "hello",
              url: "hello",
              ogImage: "hello",
              links: {
                github: "hello",
                twitter: "hello",
              },
            }}
            navigationItems={mainConfiguration.navigationItems}
          />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
