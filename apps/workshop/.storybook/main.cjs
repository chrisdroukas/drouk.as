const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  framework: { name: "@storybook/react-vite" },
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    };
  },
};
