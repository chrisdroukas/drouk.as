import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

// Load fonts at the module scope
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

// Function to return the font variables
export const getFontVariables = () => {
  return {
    fontSansVariable: fontSans.variable,
    fontHeadingVariable: fontHeading.variable,
  };
};
