import { NavigationItem } from "./navigation-item";

export type SiteConfiguration = {
  name: string;
  description: string;
  keywords: string | string[];
  author: {
    name: string;
    url: string | URL;
  };
  creator: string;
  links: {
    url: string;
    twitter: string;
    github: string;
  };
};

export type NavigationConfiguration = {
  navigationItems: NavigationItem[];
};
