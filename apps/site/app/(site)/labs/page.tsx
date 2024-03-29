// import { Intro } from "@/components/intro";
// import { Strings } from "@/library/strings";

export default async function BlogPage() {
  //   const posts = allPosts
  //     .filter((post) => post.published)
  //     .sort((a, b) => {
  //       return compareDesc(new Date(a.date), new Date(b.date));
  //     });

  return (
    <div className="container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Labs
          </h1>
          <p className="my-4 text-xl text-muted-foreground">
            Explore technology demos and experiments.
          </p>
        </div>
      </div>
      <hr className="my-8" />

      {/* {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">posts</div>
      ) : (
        <p>No posts published.</p>
      )} */}
    </div>
  );
}
