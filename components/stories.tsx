import Grid from "./grid";
import StoryPreview from "./story-preview";
import Post from "../types/post";

type Props = {
  title: string;
  posts: Post[];
};

const Stories = ({ title, posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {title}
      </h2>
      <Grid>
        {posts.map((post) => (
          <StoryPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Stories;
