import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { ThemeProvider } from "ui/components/theme-provider";
import "ui/tailwind.config";

/**
 * We're using the `useDarkMode()` hook to set Mantine's dark
 * or light mode alongside the Storybook core UI as well.
 */
function Preview(props: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </ThemeProvider>
  );
}

export const decorators = [
  (renderStory: any) => <Preview>{renderStory()}</Preview>,
];

export const parameters = { layout: "fullscreen" };
