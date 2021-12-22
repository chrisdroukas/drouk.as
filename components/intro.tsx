import styled from "styled-components";

const Section = styled.section(({ theme }) => ({
  marginTop: "6rem",
  marginBottom: "5rem",
  [theme.breakpoints.medium]: {
    marginTop: "10rem",
    marginBottom: "5rem",
  },
  [theme.breakpoints.large]: {
    marginTop: "12rem",
    marginBottom: "5rem",
  },
}));

const Title = styled.h1(({ theme }) => ({
  letterSpacing: "-0.2rem",
  marginTop: "0rem",
  marginBottom: "2rem",
  fontSize: "3rem",
  lineHeight: 1,
  [theme.breakpoints.medium]: {
    fontSize: "4rem",
    lineHeight: 1,
  },
  [theme.breakpoints.large]: {
    fontSize: "5rem",
    lineHeight: 1,
  },
}));

const TitleLineFormatter = styled.span`
  display: inline-block;
`;

const Subtitle = styled.p(({ theme }) => ({
  letterSpacing: "-0.1rem",
  marginTop: "0rem",
  marginBottom: "0rem",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "normal",
  [theme.breakpoints.medium]: {
    fontSize: "2rem",
    lineHeight: "normal",
  },
  [theme.breakpoints.large]: {
    fontSize: "2.5rem",
    lineHeight: "normal",
  },
}));

const Intro = () => {
  return (
    <Section>
      <Title>
        <TitleLineFormatter>Chris Droukas is a</TitleLineFormatter>
        <TitleLineFormatter>design tech&shy;nologist</TitleLineFormatter>
        <TitleLineFormatter>in New York.</TitleLineFormatter>
      </Title>
      <Subtitle className="text-center md:text-left text-lg mt-5 md:pl-8">
        Designing at Goldman Sachs for{" "}
        <a
          title="A platform for financial technology."
          href="https://developer.gs.com"
        >
          Goldman Sachs Developer
        </a>{" "}
        and{" "}
        <a
          title="A marketplace for institutional investors."
          href="https://marquee.gs.com/welcome"
        >
          Marquee
        </a>
        . Previously:{" "}
        <a title="An online travel agency." href="https://priceline.com">
          Priceline
        </a>
        ,{" "}
        <a
          title="An advertising technology company."
          href="https://socialcode.com"
        >
          SocialCode
        </a>
        , and{" "}
        <a title="An experimental media group." href="https://wapo.st">
          Washington Post Labs
        </a>
        .
      </Subtitle>
    </Section>
  );
};

export default Intro;
