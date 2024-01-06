/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/editions/the-after-hours-with-clubkade/tickets',
        permanent: false,
      },
      {
        source: '/editions/the-after-hours-with-clubkade',
        destination: '/editions/the-after-hours-with-clubkade/tickets',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
