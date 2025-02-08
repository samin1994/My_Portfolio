/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  images: {
    unoptimized: true, // Required for GitHub Pages since it doesn’t support Next.js image optimization
  },
};

export default nextConfig;
