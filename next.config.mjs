/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/My_Portfolio/' : '', // Adjust asset prefix only in production
};

export default nextConfig;
