import { useEffect, useState } from "react";

/**
 * Hook for determining whether an element has mounted in the DOM.
 *
 * Useful for determining a theme and avoiding mistimed renderings, for example.
 */
export const mounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
