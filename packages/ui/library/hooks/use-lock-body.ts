"use client";

import { useLayoutEffect } from "react";

export function useLockBody(lock?: boolean) {
  useLayoutEffect(() => {
    let originalStyle: string;

    if (lock) {
      originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (lock) {
        document.body.style.overflow = originalStyle;
      }
    };
  }, [lock]);
}
