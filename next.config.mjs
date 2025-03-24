/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

export const basePath = "/epymt";


const nextConfig = {
    output: "export",
    basePath: basePath,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
