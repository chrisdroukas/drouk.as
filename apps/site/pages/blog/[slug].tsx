import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { nodeTypes } from "@mdx-js/mdx";
import remarkShikiTwoslash from "remark-shiki-twoslash";
import rehypeRaw from "rehype-raw";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { PostFilePaths, PostsPath } from "../../mdx/mdx-paths";

/**
 * Custom components and renderers to pass to MDX.
 *
 * Since MDX documents aren't loaded by default, they have
 * no knowledge of how to handle import statements. Instead,
 * include components in scope here.
 *
 * This also works with dynamically-imported components, which
 * is useful for conditionally loading components for specific
 * routes.
 */
const components = {
  //   a: CustomLink,
  TestComponent: dynamic(() => import("ui/hero").then((mod) => mod.Hero)),
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/" legacyBehavior>
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }
        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(PostsPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    /**
     * Pass Remark and Rehype plugins.
     */
    mdxOptions: {
      remarkPlugins: [[remarkShikiTwoslash, { theme: "min-light" }]],
      rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = PostFilePaths
    /**
     * Remove file extensions (.mdx) for page paths.
     */
    .map((path) => path.replace(/\.mdx?$/, ""))
    /**
     * Map the path into the static paths object required by Next.
     */
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
