/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    assetPrefix : "https://ngyukfung.github.io/epymt/"
};

export default nextConfig;
