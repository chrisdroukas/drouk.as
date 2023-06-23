import { NavigationItem } from "./navigation-item";

export type SiteConfiguration = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type MainConfiguration = {
  navigationItems: NavigationItem[];
};
