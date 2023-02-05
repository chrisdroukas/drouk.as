import { StoryObj } from "@storybook/react";
import { Hero, Strings } from "ui";

export default { title: "Hero", component: Hero };

export const Default: StoryObj<typeof Hero> = {
  args: {
    title: Strings.hero.title,
    body: Strings.hero.body,
    debug: false,
  },
  render: (args) => <Hero {...args} />,
};
