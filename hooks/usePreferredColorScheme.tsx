import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { useMounted } from "./useMounted";

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

  /**
   * This is a joy of SSR and React hydration.
   *
   * There's likely a cleaner way to do this, but we're checking if
   * the element calling for a preferred color scheme has mounted yet.
   *
   * If it hasn't, we're stepping around a `className` mismatch by just
   * returning a `lightTheme` and (in effect) immediately checking again.
   * This mismatch otherwise causes numerous `styled-component` views
   * to render without styles, or fail to adopt the correct style either
   * on mount or on preferred color scheme change.
   */
  if (useMounted()) {
    return preferredColorScheme === "light" ? lightTheme : darkTheme;
  } else {
    return lightTheme;
  }
};
