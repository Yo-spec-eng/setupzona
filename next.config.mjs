/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Permite imágenes de Amazon en fichas de producto si las usas.
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'images-na.ssl-images-amazon.com' },
    ],
  },
  // Redirige www -> no-www y fuerza buenas prácticas de SEO desde Vercel.
  async redirects() {
    return [];
  },
};

export default nextConfig;
