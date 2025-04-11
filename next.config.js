/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  trailingSlash: true,
  distDir: 'out',
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/join/birmingham': { page: '/join/birmingham' }
    }
  }
}

module.exports = nextConfig
