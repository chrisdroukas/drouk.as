import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    shadow: string;
    surface: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    palette: {
      primary: string;
    };
    breakpoints: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
