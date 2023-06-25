import { Strings } from "ui/library/strings";
import { SiteConfiguration } from "ui/types";

export const siteConfiguration: SiteConfiguration = {
  name: Strings.configuration.name,
  description: Strings.configuration.description,
  ogImage: Strings.configuration.ogImage,
  links: {
    url: Strings.configuration.links.url,
    twitter: Strings.configuration.links.twitter,
    github: Strings.configuration.links.github,
  },
};
