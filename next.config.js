/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  distDir: 'out',
  async redirects() {
    return [
      {
        source: '/about/beliefs',
        destination: '/about/beliefs/',
        permanent: true,
      },
      {
        source: '/join/birmingham',
        destination: '/join/birmingham/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about/beliefs',
        destination: '/about/beliefs/index.html',
      },
      {
        source: '/join/birmingham',
        destination: '/join/birmingham/index.html',
      },
    ]
  },
}

module.exports = nextConfig 