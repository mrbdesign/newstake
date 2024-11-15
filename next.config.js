/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: 'gateway.ipfscdn.io',
      },
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
      }
    ],
    domains: [
      'ipfs.thirdwebcdn.com',
      'gateway.ipfscdn.io',
      'nftstorage.link',
      'ipfs.io'
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true
  },
}

module.exports = nextConfig
