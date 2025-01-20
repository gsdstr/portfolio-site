// @ts-check

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
      allowedOrigins: ['joul.in', '*.joul.in'],
    },
  },
  async rewrites() {
    return [
      {
        source: '/script.js',
        destination: 'https://cloud.umami.is/script.js', // Matched parameters can be used in the destination
      },
    ]
  }
};

module.exports = nextConfig;
