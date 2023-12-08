import { ReactNode } from "react";
import { SiteLayout } from "@/components/layouts";
import { navigationConfiguration, siteConfiguration } from "#/configuration";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <SiteLayout
      navigation={{
        configuration: siteConfiguration,
        navigationItems: navigationConfiguration.navigationItems,
      }}
    >
      {children}
    </SiteLayout>
  );
}
