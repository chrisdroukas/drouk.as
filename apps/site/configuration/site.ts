import { Strings } from "ui/library/strings";
import { SiteConfiguration } from "ui/types";

export const siteConfiguration: SiteConfiguration = {
  name: Strings.configuration.name,
  description: Strings.configuration.description,
  keywords: Strings.configuration.keywords,
  author: {
    name: Strings.configuration.author.name,
    url: Strings.configuration.author.url,
  },
  creator: Strings.configuration.creator,
  ogImage: Strings.configuration.ogImage,
  links: {
    url: Strings.configuration.links.url,
    twitter: Strings.configuration.links.twitter,
    github: Strings.configuration.links.github,
  },
};
