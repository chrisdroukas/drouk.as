import { Intro } from "@/components/intro";
import { Strings } from "@/library/strings";

export default async function Page() {
  return (
    <>
      <Intro
        title={Strings.intro.title}
        body={Strings.intro.body}
        buttons={[
          {
            href: Strings.configuration.navigation.about.href,
            label: `${Strings.configuration.navigation.about.title}`,
            variant: "default",
            size: "lg",
          },
          {
            href: Strings.configuration.links.github,
            label: "GitHub",
            variant: "outline",
            size: "lg",
          },
        ]}
      />
    </>
  );
}
