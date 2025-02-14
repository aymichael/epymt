/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: isProd ? 'export' : undefined,
    reactStrictMode: true,
    assetPrefix: isProd
      ? 'https://ngyukfung.github.io/epymt/'
      : undefined
  }

export default nextConfig;
