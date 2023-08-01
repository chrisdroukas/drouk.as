import { NavigationItem } from "./navigation-item";

export type SiteConfiguration = {
  name: string;
  description: string;
  ogImage: string;
  links: {
    url: string;
    twitter: string;
    github: string;
  };
};

export type NavigationConfiguration = {
  navigationItems: NavigationItem[];
};
