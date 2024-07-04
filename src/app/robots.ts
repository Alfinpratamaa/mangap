import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/private/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/private/"],
      },
    ],
    sitemap: "https://mangapp.me/sitemap.xml",
    host: "https://mangapp.me",
  };
}
