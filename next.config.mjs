/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:
      process.env.NEXT_IMAGE_ALLOW_ALL_DOMAINS === "true"
        ? []
        : [
            "res.cloudinary.com",
            "komikcast.lol",
            "kiryuu.id",
            "svr4.imgkc1.my.id",
            "svr5.imgkc2.my.id",
            "svr6.imgkc3.my.id",
          ],
    remotePatterns:
      process.env.NEXT_IMAGE_ALLOW_ALL_DOMAINS === "true"
        ? [
            {
              protocol: "https",
              hostname: "**",
            },
          ]
        : [],
  },
};

export default nextConfig;
