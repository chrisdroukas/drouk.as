import { renderHook, act } from "@testing-library/react";
import { useLockBody } from "./use-lock-body";

describe("useLockBody", () => {
  it("should set overflow style to hidden and restore original value on unmount", () => {
    const originalOverflow = document.body.style.overflow;

    // Run the hook in a component
    const { unmount } = renderHook(() => useLockBody());

    // Check if overflow is set to hidden
    expect(document.body.style.overflow).toBe("hidden");

    // Unmount the component
    act(() => {
      unmount();
    });

    // Check if overflow is restored
    expect(document.body.style.overflow).toBe(originalOverflow);
  });
});
