interface Cookie {
  name: string;
  maxAge: number;
}

export const ColorSchemeCookie: Cookie = {
  name: "droukas-color-scheme",
  maxAge: 60 * 60 * 24 * 30,
};
