const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio2' : '',
  assetPrefix: isProd ? '/portfolio2' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
