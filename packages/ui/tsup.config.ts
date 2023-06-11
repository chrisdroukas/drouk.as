import { defineConfig } from "tsup";

const env = process.env.NODE_ENV;

export default defineConfig({
  splitting: true,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  minify: env === "production",

  skipNodeModulesBundle: true,
  entry: ["index.ts"],
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
