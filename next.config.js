/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: [
      "images.unsplash.com",
      "mapio.net",
      "upload.wikimedia.org",
      "firebasestorage.googleapis.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
