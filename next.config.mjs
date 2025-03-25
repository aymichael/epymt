/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

export const basePath = "/epymt";


const nextConfig = {
    basePath: basePath,
};

export default nextConfig;
