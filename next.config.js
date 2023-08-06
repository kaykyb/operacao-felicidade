/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/r/:rifa*",
        destination: "/contest/:rifa*",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
