/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["static.fmovies24.to", "gogoflix.shop"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.fmovies24.to",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "gogoflix.shop",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
