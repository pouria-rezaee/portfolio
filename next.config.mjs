/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  output: "export",

  basePath: "/portfolio",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
