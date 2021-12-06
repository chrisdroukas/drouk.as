import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    hero: {
      gradient: string;
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
