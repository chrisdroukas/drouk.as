import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Strings } from "@/library/strings";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Here's a look at what I've been up to lately.",
};

export default async function Writing() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            {Strings.writing.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {Strings.writing.body}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <Link
              key={post._id}
              href={post.slug}
              className="group relative flex flex-col space-y-2"
            >
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="border bg-muted transition-colors object-cover"
                      priority={index <= 1}
                    />
                  </AspectRatio>
                )}
                <h2 className="font-heading text-2xl">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {/* {formatDate(post.date)} */}
                  </p>
                )}

                <span className="sr-only">View Article</span>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
