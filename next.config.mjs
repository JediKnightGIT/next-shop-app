/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        // port: '3000',
        // pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
