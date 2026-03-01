import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mangatech/frontend/out',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
