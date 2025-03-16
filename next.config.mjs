/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next.js to output a static HTML export
  output: 'export',

  // (Optional) If hosting at /<repo-name> instead of root:
  basePath: '/thesmur',
  assetPrefix: '/thesmur/',
};

export default nextConfig;
