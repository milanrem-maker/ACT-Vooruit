import type { MetadataRoute } from "next";

import { publishedBlogPosts } from "@/content/blog-posts";
import { publicRoutes, siteConfig } from "@/content/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    ...publicRoutes,
    ...publishedBlogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.7,
  }));
}
