import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const BASE_PATH = isProd ? '/mangatech-prototype' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: BASE_PATH,
  assetPrefix: isProd ? '/mangatech-prototype/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
