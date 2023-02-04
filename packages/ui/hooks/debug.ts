import useTilg from "tilg";
import { strings } from "../strings";

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
export const useDebug = (...args: any[]) => {
  if (process.env.NODE_ENV === "production") {
    throw new Error(strings.debug.failure);
  }
  return useTilg(...args);
};
