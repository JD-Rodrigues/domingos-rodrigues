/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com','github.com','github.com/JD-Rodrigues'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
