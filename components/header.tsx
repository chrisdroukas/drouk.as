import { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import Container from "./container";

type Props = {
  transparent?: boolean;
  accessory?: ReactNode;
};

const HeaderContainer = styled.header<Props>(
  {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
  },
  ({ theme }) => ({
    background: theme.surface.primary,
    borderBottomColor: theme.border.secondary,
  }),
  ({ theme }) => ({
    background: "none",
    backdropFilter: "blur(32px)",
  })
);

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

const Header = ({ transparent, accessory }: Props) => {
  const accessoryElement = accessory && <FooterGrid>{accessory}</FooterGrid>;

  return (
    <HeaderContainer transparent={transparent}>
      <Container>
        <FooterInnerContainer>
          <FooterGrid>
            <Link href="/" passHref>
              <SiteTitle title="Home">Chris Droukas</SiteTitle>
            </Link>
          </FooterGrid>
          {accessoryElement}
        </FooterInnerContainer>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
