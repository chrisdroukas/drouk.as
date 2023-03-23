import { Hero, Strings } from "ui";

export default function HomePage() {
  return (
    <>
      <Hero title={Strings.hero.title} body={Strings.hero.body} />
    </>
  );
}
