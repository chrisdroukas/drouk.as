import { FC } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  EmotionCache,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

interface ThemeProviderProps {
  /**
   * Content to render, typically an application
   * wrapper.
   */
  children: React.ReactNode;

  /**
   * To support SSR with a custom cache, the same
   * Emotion cache must be provided to Theme Provider and SSR.
   *
   * @see https://mantine.dev/theming/emotion-cache/
   */
  emotionCache: EmotionCache;

  /**
   * A predefined color scheme.
   */
  colorScheme?: ColorScheme;

  /**
   * Toggles the current color scheme.
   */
  toggleColorScheme?(colorScheme?: ColorScheme): void;

  /**
   * A (global) hotkey to toggle the current color scheme.
   */
  toggleColorSchemeHotkey?: string;
}

/**
 * Theme Provider is a wrapper around Mantine Provider
 * that includes a common set of defaults. This element
 * should be placed at a top-level — for example, bind
 * an entire application wrapper in Theme Provider.
 *
 * @see https://mantine.dev/theming/mantine-provider/
 */
export const ThemeProvider: FC<ThemeProviderProps> = (
  props: ThemeProviderProps
) => {
  const {
    children,
    emotionCache,
    colorScheme,
    toggleColorScheme,
    toggleColorSchemeHotkey,
  } = props;

  /**
   * If provided, assigns a global hotkey to toggle theme.
   */
  useHotkeys([[toggleColorSchemeHotkey, () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionCache={emotionCache}
        theme={{ colorScheme }}
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
