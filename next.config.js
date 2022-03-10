/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "mapio.net", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
