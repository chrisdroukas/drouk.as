import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";
const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: ["storybook-addon-swc", "storybook-dark-mode"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {},
  async viteFinal(config) {
    return mergeConfig(config, {
      /**
       * @todo
       * Temporary workaround for an error `process is not defined`.
       * @see
       * https://github.com/storybookjs/storybook/issues/18920
       */
      define: {
        "process.env": {},
      },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
          {
            find: "@",
            replacement: path.resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    });
  },
  docs: {
    autodocs: false,
  },
};
export default config;
