import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { createEmotionCache } from "@mantine/core";
import { ThemeProvider } from "ui";

/**
 * We're using the `useDarkMode()` hook to set Mantine's dark
 * or light mode alongside the Storybook core UI as well.
 */
function Preview(props: any) {
  return (
    <ThemeProvider
      emotionCache={createEmotionCache({ key: "droukas" })}
      colorScheme={useDarkMode() ? "dark" : "light"}
    >
      {props.children}
    </ThemeProvider>
  );
}

export const decorators = [
  (renderStory: any) => <Preview>{renderStory()}</Preview>,
];

export const parameters = { layout: "fullscreen" };
