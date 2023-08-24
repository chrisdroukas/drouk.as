import Link from "next/link";
import { Resume } from "./data";

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
            About
          </h1>
        </div>
      </div>
      <hr className="my-8" />

      <p className="my-4 text-muted-foreground">
        Hi, I'm Chris. I'm a designer and{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://github.com/chrisdroukas"}
        >
          technologist
        </Link>{" "}
        living in New York. I'm currently leading design at Goldman Sachs on{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://developer.gs.com/discover/plottool-pr"}
        >
          PlotTool Pro
        </Link>
        , an application that helps organizations visualize and collaborate on
        timeseries data analytics.
      </p>
      <p className="my-4 text-muted-foreground">
        Prior to PlotTool Pro, I designed and developed{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://developer.gs.com"}
        >
          Goldman Sachs Developer
        </Link>
        , a center for developers to explore a comprehensive set of APIs and
        tools for accessing financial data programmatically. I wrote{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://design.gs.com"}
        >
          Goldman Sachs Design
        </Link>
        , a resource for designers and developers at Goldman Sachs to learn how
        to craft performant financial applications.
      </p>
      <p className="my-4 text-muted-foreground">
        Before Goldman Sachs, I spent a few years as the design lead on{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://github.com/priceline/design-system"}
        >
          design systems
        </Link>{" "}
        and{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://priceline.com/partner/v2/mobile-app"}
        >
          native mobile apps
        </Link>{" "}
        at{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://priceline.com"}
        >
          Priceline
        </Link>
        .
      </p>

      <p className="my-4 text-muted-foreground">
        Before Priceline, I designed and developed performance advertising
        technology and mobile apps for{" "}
        <Link
          className="droukas-link-underlined"
          href={"https://socialcode.com"}
        >
          SocialCode
        </Link>
        .
      </p>
      <p className="my-4 text-muted-foreground">
        Prior to SocialCode, I designed social news applications for Washington
        Post Labs, an experimental media group focused on personalized news and
        information.
      </p>
      <hr className="my-8" />
      <Resume />
      <hr className="my-8" />

      {/* {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">posts</div>
      ) : (
        <p>No posts published.</p>
      )} */}
    </div>
  );
}
