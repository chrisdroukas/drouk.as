const path = require("path");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  experimental: {
    appDir: true,
    outputFileTracingIgnores: ["**swc+core**", "**esbuild**"],
    // outputFileTracingRoot: path.join(__dirname, "../../"),
    // outputFileTracingExcludes: {
    //   "*": [
    //     // prettier-ignore
    //     'node_modules/@swc/core-linux-x64-gnu',
    //     "node_modules/.pnpm/@swc+core-linux-x64-musl@1.3.62",
    //     "node_modules/@esbuild/linux-x64",
    //   ],
    // },
  },
};

module.exports = config;
