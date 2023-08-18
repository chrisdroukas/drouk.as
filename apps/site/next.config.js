/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  experimental: {
    /**
     * SWC and ESBuild are being included in output incorrectly
     * due to some odd bundling behavior from Storybook in
     * another package.
     * @todo
     * @see https://github.com/vercel/next.js/issues/42641
     */
    outputFileTracingExcludes: { "*": ["**swc+core**", "**esbuild**"] },
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

module.exports = config;
