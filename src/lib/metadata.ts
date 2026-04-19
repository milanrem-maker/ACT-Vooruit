import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createMetadata({
  title,
  description,
  path,
  keywords,
}: MetadataOptions): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);

  return {
    title: fullTitle,
    description,
    keywords: keywords ? [...keywords] : [...siteConfig.seo.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
