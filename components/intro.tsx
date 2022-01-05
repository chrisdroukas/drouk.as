import styled, { keyframes } from "styled-components";

const Section = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 50px)",
  justifyContent: "center",
  // marginTop: "6rem",
  // marginBottom: "5rem",
  // [theme.breakpoints.medium]: {
  //   marginTop: "10rem",
  //   marginBottom: "5rem",
  // },
  // [theme.breakpoints.large]: {
  //   marginTop: "12rem",
  //   marginBottom: "5rem",
  // },
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

const TitleKeyframes = keyframes`
  0% { filter: brightness(0.9); backdrop-filter: blur(0) }
  100% { filter: brightness(10); backdrop-filter: blur(0) }
`;

type AnimationProps = {
  delay: string;
};

const TitleAnimation = styled.span<AnimationProps>`
  animation: ${TitleKeyframes} 2s linear;
  animation-delay: ${(props) => props.delay};
  animation-fill-mode: forwards;
`;

const Intro = () => {
  return (
    <Section>
      <Title>
        <TitleLineFormatter>
          <TitleAnimation delay={"1s"}>Chris</TitleAnimation>
          <wbr /> <TitleAnimation delay={"1.4s"}>Droukas</TitleAnimation>&nbsp;
          <wbr />
        </TitleLineFormatter>
        <TitleAnimation delay={"1.8s"}>is</TitleAnimation>&nbsp;
        <TitleAnimation delay={"2s"}>a</TitleAnimation>&nbsp;
        <TitleAnimation delay={"2.4s"}>design</TitleAnimation>&nbsp;
        <TitleAnimation delay={"2.8s"}>tech&shy;nologist</TitleAnimation>&nbsp;
        <TitleAnimation delay={"3.2s"}>in</TitleAnimation>&nbsp;
        <TitleAnimation delay={"3.6s"}>New</TitleAnimation>&nbsp;
        <TitleAnimation delay={"4s"}>York.</TitleAnimation>
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
