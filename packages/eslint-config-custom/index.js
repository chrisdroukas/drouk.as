module.exports = {
  extends: ["next", "turbo", "prettier", "eslint:recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": "error",
    "no-unused-vars": "error",
    eqeqeq: ["error", "always"],
    curly: "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-shadow": "error",
    "no-duplicate-imports": "error",
    "import/no-extraneous-dependencies": ["error", { devDependencies: false }],
    "import/order": ["error", { "newlines-between": "always" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
