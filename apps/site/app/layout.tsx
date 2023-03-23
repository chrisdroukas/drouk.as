import { FC } from "react";
import { useEffect, useState } from "react";
import NextApp, { AppContext } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";

import { ThemeProvider, ShikiTwoslash } from "ui";

import { emotionCache } from "../constants/emotion-cache";
import { ColorSchemeCookie } from "../constants/cookies";
import { ToggleColorScheme } from "../constants/hotkeys";

interface AppProps {
  children: React.ReactNode;
}

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { children } = props;

  /**
   * This hook will return either `dark` or `light`
   * on a client, but always `light` during SSR
   * because `window.matchMedia` is not available.
   *
   * @see https://mantine.dev/guides/dark-theme/
   */
  const preferredColorScheme = useColorScheme();

  /**
   * If there's no colorScheme set by props, we're
   * calling the setter here and establishing a cookie.
   */
  useEffect(() => {
    if (!props.colorScheme) {
      setColorScheme(preferredColorScheme);
      setCookie(ColorSchemeCookie.name, preferredColorScheme, {
        maxAge: ColorSchemeCookie.maxAge,
      });
    }
  }, [preferredColorScheme, props.colorScheme]);

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
    <>
      <ThemeProvider
        emotionCache={emotionCache}
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
        toggleColorSchemeHotkey={ToggleColorScheme.key}
      >
        <ShikiTwoslash />
        <html lang="en">
          <body>{children}</body>
        </html>
        <Analytics />
      </ThemeProvider>
    </>
  );
}
