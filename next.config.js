/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  output: 'export',
}

module.exports = nextConfig
