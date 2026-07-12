import Image from "next/image";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { blogPosts } from "@/content/blog-posts";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | ACT coaching bij piekeren en prestatiedruk",
  description:
    "Lees nuchtere artikelen over ACT coaching, piekeren, vermijden, uitstellen, prestatiedruk en het zorgvuldig opbouwen van ACT Vooruit.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="page-shell pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center py-6 lg:py-10">
            <p className="eyebrow mb-5">Blog</p>
            <h1 className="font-display text-5xl leading-none text-ink-900 sm:text-6xl lg:text-7xl">
              Meer weten over ACT en coaching?
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-8 text-ink-700">
              Nuchtere uitleg over thema&apos;s die kunnen spelen, en een open
              blik achter de schermen bij de voorbereiding van ACT Vooruit.
            </p>
          </div>

          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Notities bij onderwerpen over ACT en coaching"
              className="h-full min-h-[28rem] w-full rounded-[1.6rem] object-cover"
              height={860}
              priority
              src="/images/blog-topics-placeholder.svg"
              width={1200}
            />
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Artikelen</p>
          <h2 className="section-title mt-4 text-balance">
            Eerste houvast en een eerlijk kijkje achter de schermen.
          </h2>
          <p className="lede mt-5">
            Alleen volledige artikelen zijn aanklikbaar. De andere onderwerpen
            staan alvast klaar en worden later zorgvuldig uitgewerkt.
          </p>
        </div>

        <div className="section-panel grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) =>
            post.status === "published" ? (
              <Link
                className="interactive-card card-surface group flex min-h-80 flex-col px-6 py-6 sm:px-7"
                href={`/blog/${post.slug}`}
                key={post.slug}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{post.category}</p>
                  <span className="pill text-xs">Gepubliceerd</span>
                </div>
                <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900 group-hover:text-clay-700">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-ink-700">
                  {post.description}
                </p>
                <p className="mt-auto pt-6 text-sm font-semibold text-sage-700">
                  Lees artikel · {post.readingTime}
                </p>
              </Link>
            ) : (
              <article
                aria-label={`${post.title}, binnenkort`}
                className="card-surface flex min-h-80 flex-col px-6 py-6 opacity-90 sm:px-7"
                key={post.slug}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{post.category}</p>
                  <span className="pill text-xs">Binnenkort</span>
                </div>
                <h2 className="mt-5 font-display text-3xl leading-tight text-ink-900">
                  {post.title}
                </h2>
                <p className="mt-4 leading-7 text-ink-700">
                  {post.description}
                </p>
                <p className="mt-auto pt-6 text-sm font-semibold text-ink-500">
                  Wordt nog uitgewerkt
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <CtaBanner
        description="Misschien twijfel je nog. Dat is heel normaal. Neem gerust contact op."
        eyebrow="Na het lezen"
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over grenzen",
        }}
        title="Heb je een vraag?"
      />
    </>
  );
}
