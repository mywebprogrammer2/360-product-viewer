/** @type {import('next').NextConfig} */
const assetPrefix = process.env.ASSET_PREFIX || '';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix
}

module.exports = nextConfig
