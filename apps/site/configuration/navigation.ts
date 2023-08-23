import { Strings } from "ui/library/strings";
import { NavigationConfiguration } from "ui/types";

export const navigationConfiguration: NavigationConfiguration = {
  navigationItems: [
    {
      title: Strings.configuration.navigation.about.title,
      href: Strings.configuration.navigation.about.href,
    },
    // {
    //   title: Strings.configuration.navigation.work.title,
    //   href: Strings.configuration.navigation.work.href,
    // },
    {
      title: Strings.configuration.navigation.writing.title,
      href: Strings.configuration.navigation.writing.href,
    },
    // {
    //   title: Strings.configuration.navigation.running.title,
    //   href: Strings.configuration.navigation.running.href,
    // },
    // {
    //   title: Strings.configuration.navigation.labs.title,
    //   href: Strings.configuration.navigation.labs.href,
    // },
  ],
};
