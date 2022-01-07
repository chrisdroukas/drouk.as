import { DefaultTheme } from "styled-components";

const breakpoints: DefaultTheme["breakpoints"] = {
  small: "@media (min-width: 400px)",
  medium: "@media (min-width: 800px)",
  large: "@media (min-width: 1200px)",
};

export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  shadow: "rgba(0,0,0,0.25)",
  surface: {
    primary: "#f1f1f1",
    secondary: "#eeeeee",
    tertiary: "#aaaaaa",
  },
  border: {
    primary: "#f1f1f1",
    secondary: "#eeeeee",
    tertiary: "#aaaaaa",
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
  shadow: "rgba(0,0,0,0.5)",
  surface: {
    primary: "#212121",
    secondary: "#303030",
    tertiary: "#424242",
  },
  border: {
    primary: "#212121",
    secondary: "#303030",
    tertiary: "#424242",
  },
  palette: {
    primary: "#ffffff",
  },
  breakpoints: {
    ...breakpoints,
  },
};
