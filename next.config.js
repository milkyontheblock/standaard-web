/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/editions/the-after-hours-with-clubkade',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
