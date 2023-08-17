import Link from "next/link";
import { getResumeData } from "app/api/resume/helpers";

// import { Intro } from "ui/components/intro";
// import { Strings } from "ui/library/strings";

export default async function BlogPage() {
  //   const posts = allPosts
  //     .filter((post) => post.published)
  //     .sort((a, b) => {
  //       return compareDesc(new Date(a.date), new Date(b.date));
  //     });

  const data = await getResumeData();

  return (
    <div className="container max-w-5xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            About
          </h1>
          <p className="my-4 text-xl text-muted-foreground">
            Chris Droukas is a design technologist living in New York, currently
            designing new experiences for{" "}
            <Link className="droukas-link-underlined" href={""}>
              Goldman Sachs
            </Link>
            .
          </p>
        </div>
      </div>
      <hr className="my-8" />

      <p className="my-4 text-md text-muted-foreground">
        I build innovative products with emerging new technologies and use
        design to tell stories.
      </p>
      <p className="my-4 text-md text-muted-foreground">
        {JSON.stringify(data.basics)}
      </p>
      {/* {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">posts</div>
      ) : (
        <p>No posts published.</p>
      )} */}
    </div>
  );
}
