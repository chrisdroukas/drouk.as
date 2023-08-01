require("@testing-library/jest-dom/extend-expect");

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

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
