import Link from "next/link";
import styled from "styled-components";

type Props = {
  title: string;
  url: string;
};

const ButtonElement = styled.a(({ theme }) => ({
  display: "inline-grid",
  background: "rgb(166, 255, 0)",
  padding: "1rem 2rem",
  borderRadius: "2rem",
  margin: "0",
  color: "rgb(0, 0, 0)",
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "-0.5px",
  fontSize: "1rem",
  [theme.breakpoints.medium]: {
    lineHeight: "normal",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.large]: {
    lineHeight: "normal",
    fontSize: "1.4rem",
  },
}));

const Button = ({ title, url }: Props) => {
  /**
   * Check if we should use Next's `Link` element
   * or a standard `a` tag. Next disallows
   * external links from their element.
   */
  if (url.startsWith("http")) {
    return <ButtonElement href={url}>{title}</ButtonElement>;
  } else {
    return (
      <Link href={url} passHref>
        <ButtonElement>{title}</ButtonElement>
      </Link>
    );
  }
};

export default Button;
