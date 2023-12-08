import { SiteLayout, SiteLayoutProps } from "@/components/layouts";
import { navigationConfiguration, siteConfiguration } from "#/configuration";

export default async function Layout({ children }: SiteLayoutProps) {
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
