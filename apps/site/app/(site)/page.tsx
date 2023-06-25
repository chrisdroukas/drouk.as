import { Intro } from "ui/components/intro";
import { Strings } from "ui/library/strings";

export default function Page() {
  return (
    <>
      <Intro
        title={Strings.intro.title}
        body={Strings.intro.body}
        buttons={[
          {
            href: Strings.configuration.navigation.work.href,
            label: `View ${Strings.configuration.navigation.work.title}`,
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
