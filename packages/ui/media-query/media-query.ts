import { MantineNumberSize } from "@mantine/core";

/**
 * Returns a max-width media query based on a Mantine
 * number or size.
 *
 * @see MantineNumberSize
 */
export const MediaQuery = (breakpoint: MantineNumberSize) => {
  return `@media (max-width: ${breakpoint}px)`;
};
