import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumitaasur.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL("/", siteUrl).toString(), lastModified: new Date() }];
}
