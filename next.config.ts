import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['deisishop.pythonanywhere.com'], 
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deisishop.pythonanywhere.com', 
        pathname: '/media/produto_imagens/**', 
      },
    ],
  },
};

