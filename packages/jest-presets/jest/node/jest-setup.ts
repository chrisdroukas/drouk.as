import "@testing-library/jest-dom";

const originalMatchMedia = window.matchMedia;

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  });
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});