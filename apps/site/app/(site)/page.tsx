import { Intro } from "@/components/intro";
import { Strings } from "@/library/strings";
import { Navigation } from "@/components/navigation";
import { navigationConfiguration, siteConfiguration } from "#/configuration";

export default async function Page() {
  return (
    <>
      <Intro
        title={Strings.intro.title}
        buttons={[
          {
            href: Strings.configuration.navigation.about.href,
            label: `${Strings.configuration.navigation.about.title}`,
            variant: "default",
            size: "default",
          },
          {
            href: Strings.configuration.links.github,
            label: "GitHub",
            variant: "outline",
            size: "default",
          },
        ]}
      >
        <Navigation
          configuration={siteConfiguration}
          navigationItems={navigationConfiguration.navigationItems}
          overlay={true}
        />
      </Intro>
    </>
  );
}
