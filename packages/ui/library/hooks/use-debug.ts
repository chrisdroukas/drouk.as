import useTilg from "tilg";
import { Strings } from "../strings";

/**
 * Logs lifecycle events and debug messages to the console.
 *
 * Though the underlying hook is disabled by default in production,
 * this wrapper will throw an error and force manual removal.
 *
 * Pass additional values to `useDebug` to log them to the console.
 *
 * @example
 * useDebug("foo", bar, [baz, qux])
 */
export const useDebug = (enabled?: boolean, ...args: any[]) => {
  /**
   * Check additionally for `document` to prevent SSR warnings.
   *
   * This function will not be called in a server environment, but
   * React otherwise complains locally about `useLayoutEffect` doing
   * nothing on the server.
   */
  if (typeof document !== "undefined" && enabled) {
    const tilg = useTilg(...args);

    if (enabled && process.env.NODE_ENV === "production") {
      throw new Error(Strings.debug.failure);
    }

    return tilg;
  }
};
