import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { AspectRatio } from "ui/components/aspect-ratio";
// import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Writing",
};

export default async function BlogPage() {
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
            Writing
          </h1>
          <p className="text-xl text-muted-foreground">
            Here's a look at what I've been up to lately.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <Link
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
                <h2 className="font-heading text-2xl font-extrabold">
                  {post.title}
                </h2>
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
