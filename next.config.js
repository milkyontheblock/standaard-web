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
        source: '/products/waterijs',
        destination: 'https://buy.stripe.com/eVaaEW5xSaOY2k07st',
        permanent: false
      }
    ];
  },
};

module.exports = nextConfig;
