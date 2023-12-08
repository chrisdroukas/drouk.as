import { SiteLayout, SiteLayoutProps } from "@/components/layouts";
import { siteConfiguration } from "#/configuration";

export default async function Layout({ children }: SiteLayoutProps) {
  return (
    <SiteLayout footer={{ configuration: siteConfiguration }}>
      {children}
    </SiteLayout>
  );
}
