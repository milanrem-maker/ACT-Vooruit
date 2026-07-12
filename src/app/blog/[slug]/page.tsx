import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/cta-banner";
import {
  getPublishedBlogPost,
  publishedBlogPosts,
} from "@/content/blog-posts";
import { siteConfig } from "@/content/site-config";
import { absoluteUrl, createMetadata } from "@/lib/metadata";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post) {
    return {};
  }

  const metadata = createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  return {
    ...metadata,
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);

  if (!post?.sections) {
    notFound();
  }

  return (
    <>
      <article className="page-shell pt-8 sm:pt-10">
        <header className="article-header mx-auto max-w-4xl">
          <Link
            className="text-sm font-semibold text-sage-700 underline decoration-sage-300 underline-offset-4 hover:text-clay-700"
            href="/blog"
          >
            Terug naar het blog
          </Link>
          <p className="eyebrow mb-5 mt-8">{post.category}</p>
          <h1 className="font-display text-5xl leading-[0.98] text-ink-900 sm:text-6xl lg:text-7xl">
            {post.title}
          </h1>
          <p className="lede mt-6 max-w-3xl">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="pill">{post.readingTime}</span>
            {post.publishedAt ? (
              <time className="pill" dateTime={post.publishedAt}>
                Gepubliceerd in juli 2026
              </time>
            ) : null}
          </div>
        </header>

        <div className="article-body mx-auto mt-10 max-w-3xl pb-16 sm:mt-14 sm:pb-20">
          {post.sections.map((section, index) => (
            <section className="article-section" key={section.heading ?? index}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <aside className="mt-12 border-y border-ink-100 py-8">
            <h2 className="font-display text-3xl text-ink-900">
              Meer context over ACT Vooruit
            </h2>
            <p className="mt-4 leading-8 text-ink-700">
              Lees voor wie de coaching wordt voorbereid, hoe de werkwijze is
              opgebouwd en waar de grenzen liggen.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <Link className="text-link" href="/voor-wie">
                Voor wie
              </Link>
              <Link className="text-link" href="/werkwijze">
                Werkwijze
              </Link>
              <Link className="text-link" href="/veiligheid-of-grenzen">
                Veiligheid &amp; grenzen
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <CtaBanner
        description="ACT Vooruit is nog in voorbereiding. Heb je een vraag over de toekomstige werkwijze, dan mag je die gerust stellen."
        eyebrow={siteConfig.launch.status}
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: "/blog",
          label: "Terug naar het blog",
        }}
        title="Wil je iets weten?"
      />
    </>
  );
}
