import { renderHook, act } from "@testing-library/react";
import { useLockBody } from "./use-lock-body";

describe("useLockBody", () => {
  it("should set overflow style to hidden and restore original value on unmount when lock is true", () => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // Run the hook in a component
    const { unmount } = renderHook(() => useLockBody(true));

    // Check if overflow is set to hidden
    expect(document.body.style.overflow).toBe("hidden");

    // Unmount the component
    act(() => {
      unmount();
    });

    // Check if overflow is restored
    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it("should not set overflow style to hidden when lock is false", () => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    // Run the hook in a component
    const { unmount } = renderHook(() => useLockBody(false));

    // Check if overflow is not set to hidden
    expect(document.body.style.overflow).toBe(originalOverflow);

    // Unmount the component
    act(() => {
      unmount();
    });

    // Check if overflow is restored
    expect(document.body.style.overflow).toBe(originalOverflow);
  });
});
