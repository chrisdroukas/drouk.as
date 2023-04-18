import { MediaQuery } from "./";
import { MantineNumberSize } from "@mantine/core";

describe("MediaQuery", () => {
  it("returns the correct media query for a Mantine number size.", () => {
    const breakpoint = 640;
    const expectedQuery = `@media (max-width: ${breakpoint}px)`;

    expect(MediaQuery(breakpoint)).toEqual(expectedQuery);
  });

  it("returns the correct media query for a Mantine size", () => {
    const breakpoint: MantineNumberSize = "lg";
    const expectedQuery = `@media (max-width: ${breakpoint}px)`;

    expect(MediaQuery(breakpoint)).toEqual(expectedQuery);
  });
});
