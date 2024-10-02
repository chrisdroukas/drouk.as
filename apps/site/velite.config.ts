import { defineCollection, defineConfig, s } from "velite";

const pages = defineCollection({
  name: "Pages",
  pattern: "pages/**/*.mdx",
  schema: s.object({
    title: s.string(),
    code: s.mdx(),
  }),
});

const writing = defineCollection({
  name: "Writing",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      slug: s.slug("writing"),
      title: s.string(),
      description: s.string(),
      image: s.string(),
      date: s.isodate(),
      code: s.mdx(),
    })
    .transform((data) => ({ ...data, permalink: `/writing/${data.slug}` })),
});

export default defineConfig({
  collections: { pages, writing },
});
