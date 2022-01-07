import styled from "styled-components";
import Button from "../button";

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
  textShadow: `0px 0px 24px ${theme.shadow}`,
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
  marginBottom: "2rem",
  fontWeight: 500,
  fontSize: "1.5rem",
  lineHeight: "normal",
  textShadow: `0px 0px 24px ${theme.shadow}`,
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
        <TitleLineFormatter>
          I&apos;m running The Brooklyn Half Marathon and raising $2,000 in
          support of Dana-Farber Cancer Institute.
        </TitleLineFormatter>
      </Title>
      <Subtitle className="text-center md:text-left text-lg mt-5 md:pl-8">
        Since 1947, Dana-Farber Cancer Institute has been committed to providing
        adults and children with cancer the best treatment available today while
        developing tomorrow&apos;s cures through cutting-edge research.
      </Subtitle>
      <Button
        title="Support My Run"
        url="http://danafarber.jimmyfund.org/goto/droukas"
      />
    </Section>
  );
};

export default Intro;
