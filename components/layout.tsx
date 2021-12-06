import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

import { ThemeProvider } from "styled-components";
import { preferredColorScheme } from "../hooks/usePreferredColorScheme";
import { GlobalStyles } from "../styles/globalStyles";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <ThemeProvider theme={preferredColorScheme()}>
      <GlobalStyles />
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
