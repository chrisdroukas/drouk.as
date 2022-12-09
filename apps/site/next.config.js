/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: ["ui"],
  },
};

module.exports = config;
