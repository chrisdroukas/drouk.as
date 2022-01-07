import styled from "styled-components";
import Container from "./container";

const FooterContainer = styled.footer(({ theme }) => ({
  position: "sticky",
  top: "100vh",
  marginTop: "5rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  background: theme.surface.primary,
  borderTopColor: theme.border.secondary,
  borderTopStyle: "solid",
  borderTopWidth: "1px",
}));

const FooterInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-auto-flow: column dense;
  grid-column-gap: 1rem;
`;

const SiteTitle = styled.a`
  font-weight: 700;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterInnerContainer>
          <FooterGrid>
            <SiteTitle href="">drouk.as</SiteTitle>
            {/* <a href="">Resume</a> */}
            <a href="https://github.com/chrisdroukas">GitHub</a>
            <a href="https://linkedin.com/in/chrisdroukas">LinkedIn</a>
          </FooterGrid>
          {/* <FooterGrid>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="mx-3 font-bold hover:underline"
            >
              View Source
            </a>
          </FooterGrid> */}
        </FooterInnerContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
