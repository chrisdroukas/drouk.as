import { navigationConfiguration, siteConfiguration } from "#/configuration";
import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  const app = {
    url: siteConfiguration.links.url,
    lastModified: new Date().toISOString(),
  };

  const routes = navigationConfiguration.navigationItems.map((route) => ({
    url: `${siteConfiguration.links.url}${route.href}`,
    lastModified: new Date().toISOString(),
  }));

  const posts = allPosts.map((post) => ({
    url: `${siteConfiguration.links.url}/writing${post.slug}`,
    lastModified: post.date,
  }));

  return [app, ...routes, ...posts];
}
