import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      /**
       * @todo
       * Temporary workaround for an error `process is not defined`.
       * @see
       * https://github.com/storybookjs/storybook/issues/18920
       */
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    });
  },
};

export default config;
