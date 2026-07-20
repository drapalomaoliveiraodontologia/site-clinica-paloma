import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://site-clinica-paloma-xg6q.vercel.app/sitemap.xml",
  };
}