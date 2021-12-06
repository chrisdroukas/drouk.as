import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";

export type Theme = "dark" | "light" | "none";

/**
 * SSR workaround for getting `window.matchMedia`.
 */
const windowMatchMedia = typeof window !== "undefined" && window.matchMedia;

/**
 * Hook for setting and getting a user's preferred color scheme via CSS property `prefers-color-scheme`.
 */
export const usePreferredColorScheme = () => {
  const [preferredColorScheme] = useState("no-preference");

  if (typeof windowMatchMedia !== "function") {
    return preferredColorScheme;
  }

  const makeMatch = () => windowMatchMedia("(prefers-color-scheme: dark)");

  const colorScheme = (match: MediaQueryList): Theme =>
    match.matches ? "dark" : "light";

  const supported = typeof window !== "undefined" && "matchMedia" in window;

  if (!supported) {
    return "none";
  }

  const match = makeMatch();

  const [preference, setPreference] = useState(colorScheme(match));

  useEffect(() => {
    const handler = () => {
      setPreference(colorScheme(match));
    };

    match.addEventListener("change", handler);
    return () => match.removeEventListener("change", handler);
  }, [match]);

  return preference;
};

/**
 * Returns a preferred color scheme.
 */
export const preferredColorScheme = () => {
  const preferredColorScheme = usePreferredColorScheme();
  return preferredColorScheme === "light" ? lightTheme : darkTheme;
};
