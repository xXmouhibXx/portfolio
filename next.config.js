const isProd = process.env.NODE_ENV === "production";
const isNetlify = process.env.NETLIFY === "true";

const nextConfig = {
  // Only use basePath and assetPrefix for GitHub Pages, not Netlify
  basePath: isProd && !isNetlify ? "/Next.js-Tailwind-CSS-Portfolio-Template" : "",
  assetPrefix: isProd && !isNetlify ? "/Next.js-Tailwind-CSS-Portfolio-Template/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;