import { AppContainer, Hero, Strings } from "ui";

export default function HomePage() {
  return (
    <AppContainer>
      <Hero title={Strings.hero.title} body={Strings.hero.body} />
    </AppContainer>
  );
}
