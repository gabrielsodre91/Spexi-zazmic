/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  title: 'Spexi',
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 