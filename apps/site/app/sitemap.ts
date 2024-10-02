import { navigationConfiguration, siteConfiguration } from "#/configuration";
import { writing } from "#/.velite";

export default async function sitemap() {
  const app = {
    url: siteConfiguration.links.url,
    lastModified: new Date().toISOString(),
  };

  const routes = navigationConfiguration.navigationItems.map((route) => ({
    url: `${siteConfiguration.links.url}${route.href}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = writing.map((post) => ({
    url: `${siteConfiguration.links.url}/${post.slug}`,
    lastModified: post.date,
  }));

  return [app, ...routes, ...posts];
}
