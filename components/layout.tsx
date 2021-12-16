import Footer from "./footer";
import Meta from "./meta";

import styled, { ThemeProvider } from "styled-components";
import { preferredColorScheme } from "../hooks/usePreferredColorScheme";
import { GlobalStyles } from "../styles/globalStyles";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

/**
 * The outermost layout container.
 */
const LayoutContainer = styled.div`
  min-width: 320px;
`;

const Layout = ({ preview, children }: Props) => {
  return (
    <ThemeProvider theme={preferredColorScheme()}>
      <GlobalStyles />
      <Meta />
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
