import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
  entry: ["index.ts"],
  treeshake: true,
  sourcemap: "inline",
  minify: env === "production",
  clean: true,
  dts: true,
  splitting: false,
  format: ["cjs", "esm"],

  skipNodeModulesBundle: true,
  watch: env === "development",
  target: "es2020",
  outDir: "dist",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },

  esbuildOptions(options) {
    options.external = ["tilg/*"];
  },
});
