import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [ 
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
      }, 
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com'
      }
    ]
  }
};

export default nextConfig;
