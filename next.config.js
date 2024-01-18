/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.licdn.com",
        },
      ],
    },
    experimental: {
      serverActions: {
        allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
      },
    },
  };

  module.exports = nextConfig;