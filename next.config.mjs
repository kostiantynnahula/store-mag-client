/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
      }
    ],
    dangerouslyAllowSVG: true
  }
};

export default nextConfig;
