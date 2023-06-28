const baseConfiguration = require("../jest-presets/jest/node/jest-preset");

module.exports = {
  ...baseConfiguration,
  testEnvironment: "JSDOM",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};
