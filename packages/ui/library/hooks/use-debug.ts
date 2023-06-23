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
  if (enabled) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(Strings.debug.failure);
    }
    return useTilg(...args);
  }
};
