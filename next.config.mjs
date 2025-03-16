/** @type {import('next').NextConfig} */

const nextConfig = {
  // This tells Next.js to output a static HTML export
  output: 'export',
  trailingSlash: true, // Ensures proper static behavior
  images: {
    unoptimized: true, // Fixes image loading on GitHub Pages
  },
};

export default nextConfig;
