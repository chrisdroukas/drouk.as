import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss/types/config";

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

type BreakpointsType = Record<keyof typeof fullConfig.theme.screens, string>;

const breakpoints: BreakpointsType = fullConfig?.theme?.screens || {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export function useBreakpoint(breakpointKey: keyof typeof breakpoints) {
  const breakpointValue = breakpoints[breakpointKey];

  const isBelowBreakpoint = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });

  const capitalizedKey =
    breakpointKey.charAt(0).toUpperCase() + breakpointKey.slice(1);

  return {
    [breakpointKey]: parseInt(breakpointValue, 10),
    [`isAbove${capitalizedKey}`]: !isBelowBreakpoint,
    [`isBelow${capitalizedKey}`]: isBelowBreakpoint,
  } as Record<typeof breakpointKey, number> &
    Record<
      | `isAbove${Capitalize<typeof breakpointKey>}`
      | `isBelow${Capitalize<typeof breakpointKey>}`,
      boolean
    >;
}
