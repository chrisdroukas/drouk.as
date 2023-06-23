import { Intro } from "ui/components/intro";
import { Strings } from "ui/library/strings";

export default function Page() {
  return (
    <>
      <Intro
        title={Strings.intro.title}
        body={Strings.intro.body}
        buttons={[
          { href: "work", label: "View Work", variant: "default", size: "lg" },
          {
            href: "https://github.com/chrisdroukas",
            label: "GitHub",
            variant: "outline",
            size: "lg",
          },
        ]}
      />
    </>
  );
}
