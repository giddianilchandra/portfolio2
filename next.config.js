const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/PortFolio2' : '',
  assetPrefix: isProd ? '/PortFolio2/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig
