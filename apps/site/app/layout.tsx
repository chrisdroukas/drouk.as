import { ReactNode } from "react";

import "ui/styles/globals.css";

import { Analytics } from "ui/components/analytics";
import { TailwindIndicator } from "ui/components/tailwind-indicator";
import { ThemeProvider } from "ui/components/theme-provider";
import { cn } from "ui/library/utilities/classnames";

import { getFontVariables } from "../components/fonts";

interface RootLayoutProps {
  children: ReactNode;
}

// The RootLayout component acts as the base layout of the application
export default function RootLayout({ children }: RootLayoutProps) {
  // Set up fonts
  const { fontSansVariable, fontHeadingVariable } = getFontVariables();

  // Define classes for body
  const bodyClasses = cn(
    "min-h-screen bg-background font-sans antialiased",
    fontSansVariable,
    fontHeadingVariable
  );

  // Return the layout
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={bodyClasses}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
