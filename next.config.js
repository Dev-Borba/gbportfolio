/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações básicas
  reactStrictMode: true,
  swcMinify: true,
  
  // Otimizar carregamento de imagens
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Desabilitar source maps em produção
  productionBrowserSourceMaps: false,

  // Variáveis de ambiente do Vercel KV
  env: {
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
  },
}

module.exports = nextConfig
