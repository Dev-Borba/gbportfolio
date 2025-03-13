/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações básicas
  reactStrictMode: true,
  swcMinify: true,
  
  // Otimizar carregamento de imagens
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: process.env.NODE_ENV === 'development'
  },

  // Desabilitar source maps em produção
  productionBrowserSourceMaps: false
}

module.exports = nextConfig
