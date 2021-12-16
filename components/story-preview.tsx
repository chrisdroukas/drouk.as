import styled from "styled-components";
import DateFormatter from "./date-formatter";
// import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const StoryPreviewContainer = styled.div(({ theme }) => ({
  background: theme.surface.primary,
  padding: "1rem",
  borderColor: theme.border.secondary,
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "0.5rem",
  [theme.breakpoints.medium]: {},
  [theme.breakpoints.large]: {},
}));

const StoryPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <StoryPreviewContainer>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </StoryPreviewContainer>
  );
};

export default StoryPreview;
