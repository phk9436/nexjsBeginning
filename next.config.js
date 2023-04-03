/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [{
      source: "/api/movies/popular",
      destination: `${BASE_PATH}/movie/popular?api_key=${API_KEY}`
    }];
  },
};

module.exports = nextConfig;
