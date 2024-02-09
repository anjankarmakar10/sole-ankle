/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shop/sale",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
