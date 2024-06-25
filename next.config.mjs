/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "komikcast.lol",
      "kiryuu.id",
      "svr4.imgkc1.my.id",
      "svr5.imgkc2.my.id",
      "svr6.imgkc3.my.id",
    ],
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
        protocol: "http",
        hostname: "komikcast.lol",
      },
      {
        protocol: "http",
        hostname: "kiryuu.id",
      },
      {
        protocol: "http",
        hostname: "svr4.imgkc1.my.id",
      },
      {
        protocol: "http",
        hostname: "svr5.imgkc2.my.id",
      },
      {
        protocol: "http",
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
