import { useMediaQuery } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";

import * as tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig?.theme?.screens || {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

type BreakpointKey = keyof ScreensConfig;

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const breakpointValue = breakpoints[breakpointKey as BreakpointKey];

  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });

  const capitalizedKey =
    breakpointKey?.[0]?.toUpperCase() + breakpointKey?.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, "")),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
  } as Record<typeof breakpointKey, number> &
    Record<KeyAbove | KeyBelow, boolean>;
}
