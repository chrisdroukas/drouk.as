import "@testing-library/jest-dom";
import { jest, beforeAll, afterAll } from "@jest/globals";

const originalMatchMedia = window.matchMedia;

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn() /* Deprecated */,
      removeListener: jest.fn() /* Deprecated */,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});
