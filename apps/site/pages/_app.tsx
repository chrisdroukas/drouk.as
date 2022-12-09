import { useState } from "react";
import NextApp, { AppProps, AppContext } from "next/app";
import { ColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";
import { ThemeProvider } from "ui";

import { emotionCache } from "../constants/emotion-cache";
import { ColorSchemeCookie } from "../constants/cookies";
import { ToggleColorScheme } from "../constants/hotkeys";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  /**
   * This hook will return either `dark` or `light`
   * on a client, but always `light` during SSR
   * because `window.matchMedia` is not available.
   *
   * @see https://mantine.dev/guides/dark-theme/
   */
  const preferredColorScheme = useColorScheme();

  /**
   * We're using either the color scheme from props
   * passed via `appContext`, or the user's preferred
   * color scheme if the latter is undefined.
   */
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme ?? preferredColorScheme
  );

  /**
   * Toggles the current color scheme. Note that there's
   * a hotkey assigned in Theme Provider.
   */
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");

    setColorScheme(nextColorScheme);

    setCookie(ColorSchemeCookie.name, nextColorScheme, {
      maxAge: ColorSchemeCookie.maxAge,
    });
  };

  return (
    <ThemeProvider
      emotionCache={emotionCache}
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
      toggleColorSchemeHotkey={ToggleColorScheme.key}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie(ColorSchemeCookie.name, appContext.ctx),
  };
};
