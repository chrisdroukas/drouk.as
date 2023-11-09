import { Strings } from "@/library/strings";
import { SiteConfiguration } from "@/types";

export const siteConfiguration: SiteConfiguration = {
  name: Strings.configuration.name,
  description: Strings.configuration.description,
  keywords: Strings.configuration.keywords,
  author: {
    name: Strings.configuration.author.name,
    url: Strings.configuration.author.url,
  },
  creator: Strings.configuration.creator,
  links: {
    url: Strings.configuration.links.url,
    twitter: Strings.configuration.links.twitter,
    github: Strings.configuration.links.github,
  },
};
