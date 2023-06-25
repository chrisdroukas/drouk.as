/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  experimental: {
    appDir: true,
    // outputFileTracingRoot: path.join(__dirname, "../../"),
    outputFileTracingExcludes: {
      "*": [
        "./**/node_modules/@swc/core-linux-x64-gnu",
        "./**/node_modules/@swc/core-linux-x64-musl",
        "./**/node_modules/esbuild/linux",
      ],
    },
  },
};

module.exports = config;
