"use client";

import { useLayoutEffect } from "react";

export function useLockBody(lock?: boolean) {
  useLayoutEffect(() => {
    let overflow: string;

    if (lock) {
      /*
       * Save the original value of the overflow style.
       */
      overflow = window.getComputedStyle(document.body).overflow;

      /*
       * Set the overflow style to "hidden" to prevent scrolling on the page.
       */
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (lock) {
        /*
         * Restore the original value of the overflow style on unmount.
         */
        document.body.style.overflow = overflow;
      }
    };
  }, [lock]);
}
