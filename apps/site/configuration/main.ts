import { Strings } from "ui/library/strings";
import { MainConfiguration } from "ui/types";

export const mainConfiguration: MainConfiguration = {
  navigationItems: [
    {
      title: Strings.configuration.work,
      href: "/work",
    },
    {
      title: Strings.configuration.writing,
      href: "/writing",
    },
    {
      title: Strings.configuration.running,
      href: "/running",
    },
    {
      title: Strings.configuration.labs,
      href: "/labs",
    },
  ],
};
