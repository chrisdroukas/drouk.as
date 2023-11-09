import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import "@/styles/mdx.css";
import { AllPostsButton } from "@/components/buttons/all-posts";
import { Mdx } from "@/components/mdx";
import { Strings } from "@/library/strings";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams({ params }: PostPageProps) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((postData) => postData.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params });

  if (!post) {
    return {};
  }

  const url = "https://drouk.as";

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <AllPostsButton href={Strings.configuration.navigation.writing.href} />
      <div>
        <h1 className="mt-8 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="flex py-6 lg:py-10">
        <AllPostsButton href={Strings.configuration.navigation.writing.href} />
      </div>
    </article>
  );
}
