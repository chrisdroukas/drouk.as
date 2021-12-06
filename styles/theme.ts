import { DefaultTheme } from "styled-components";

const breakpoints: DefaultTheme["breakpoints"] = {
  small: "@media (min-width: 400px)",
  medium: "@media (min-width: 800px)",
  large: "@media (min-width: 1200px)",
};

export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  hero: {
    gradient: "linear-gradient(120deg, #000000 0%, #333333 100%);",
  },
  palette: {
    primary: "#000000",
  },
  breakpoints: {
    ...breakpoints,
  },
};

export const darkTheme: DefaultTheme = {
  background: "#000000",
  hero: {
    gradient: "linear-gradient(120deg, #ffffff 0%, #999999 100%);",
  },
  palette: {
    primary: "#ffffff",
  },
  breakpoints: {
    ...breakpoints,
  },
};
