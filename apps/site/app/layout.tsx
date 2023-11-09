import { Metadata } from "next";
import { ReactNode } from "react";

import "@/styles/globals.css";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/library/utilities/classnames";
import { getFontVariables } from "#/components/fonts";
import { siteConfiguration } from "#/configuration/site";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: siteConfiguration.name,
    template: `%s - ${siteConfiguration.name}`,
  },
  description: siteConfiguration.description,
  keywords: siteConfiguration.keywords,
  authors: [
    {
      name: siteConfiguration.author.name,
      url: siteConfiguration.author.url,
    },
  ],
  creator: siteConfiguration.creator,
  metadataBase: new URL(siteConfiguration.links.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfiguration.links.url,
    title: siteConfiguration.name,
    description: siteConfiguration.description,
    siteName: siteConfiguration.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfiguration.name,
    description: siteConfiguration.description,
  },
};

// The RootLayout component acts as the base layout of the application
export default async function RootLayout({ children }: RootLayoutProps) {
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
