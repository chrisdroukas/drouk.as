import { Intro } from "ui/components/intro";
import { Strings } from "ui/library/strings";

export default function Page() {
  return (
    <>
      <Intro title={Strings.intro.title} body={Strings.intro.body} />
    </>
  );
}
