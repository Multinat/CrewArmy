/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingRoot: undefined,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/CrewArmy' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CrewArmy/' : '',
};

module.exports = nextConfig;