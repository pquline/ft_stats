/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.intra.42.fr',
        pathname: '/users/**',
      },
    ],
  },
};

module.exports = nextConfig;
