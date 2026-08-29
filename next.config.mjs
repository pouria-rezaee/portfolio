/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",

  basePath: "/portfolio",
  assetPrefix: "/portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
