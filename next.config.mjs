/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "komikcast.lol",
      },
      {
        protocol: "https",
        hostname: "kiryuu.id",
      },
      {
        protocol: "https",
        hostname: "svr4.imgkc1.my.id",
      },
      {
        protocol: "https",
        hostname: "svr5.imgkc2.my.id",
      },
      {
        protocol: "https",
        hostname: "svr6.imgkc3.my.id",
      },
      {
        protocol: "https",
        hostname: "komikcast.moe",
      },
    ],
  },
};

export default nextConfig;
