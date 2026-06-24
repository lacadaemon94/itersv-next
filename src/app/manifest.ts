import type { MetadataRoute } from "next";

import { getHomeOgDescription } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iter",
    short_name: "Iter",
    description: getHomeOgDescription("en"),
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0a0b10",
    theme_color: "#1fffc7",
    categories: ["business", "productivity", "technology"],
    lang: "en",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
