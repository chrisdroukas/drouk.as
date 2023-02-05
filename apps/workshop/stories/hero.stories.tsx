import { Hero, Strings } from "ui";
export default { title: "Hero" };

export function HeroStory() {
  return <Hero title={Strings.hero.title} body={Strings.hero.body} />;
}
