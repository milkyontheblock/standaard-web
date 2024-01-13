/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/the-after-hours-with-clubkade/tickets',
        permanent: false,
      },
      {
        source: '/editions/the-after-hours-with-clubkade',
        destination: '/the-after-hours-with-clubkade/tickets',
        permanent: false,
      },
      {
        source: '/editions/the-after-hours-with-clubkade/tickets',
        destination: '/the-after-hours-with-clubkade/tickets',
        permanent: false,
      },
      {
        source: '/products/waterijsje',
        destination: 'https://buy.stripe.com/7sI7sK1hCe1acYE7su',
        permanent: false
      },
      {
        source: '/products/3-waterijsjes',
        destination: 'https://buy.stripe.com/9AQcN40dy7CM9MsfZ1',
        permanent: false
      }
    ];
  },
};

module.exports = nextConfig;
