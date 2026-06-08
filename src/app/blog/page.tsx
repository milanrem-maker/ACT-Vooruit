import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { blogPosts } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | ACT coaching bij piekeren en prestatiedruk",
  description:
    "Lees nuchtere artikelen over ACT coaching, piekeren, vermijden, uitstellen, prestatiedruk en wanneer coaching wel of niet passend is.",
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
              Korte, nuchtere uitleg over piekeren, uitstellen, ACT en wanneer
              coaching wel of niet past.
            </p>
          </div>

          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Rustige tijdelijke blogvisual met notities en thema's"
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
            Eerste houvast bij thema's die vaak spelen.
          </h2>
          <p className="lede mt-5">
            De artikelen zijn bedoeld als laagdrempelige start: herkenning,
            taal voor wat er speelt en een eerste richting om verder te kijken.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              className="card-surface flex min-h-80 flex-col px-6 py-6 sm:px-7"
              id={post.slug}
              key={post.slug}
            >
              <p className="eyebrow mb-4">{post.eyebrow}</p>
              <h2 className="font-display text-3xl leading-tight text-ink-900">
                {post.title}
              </h2>
              <p className="mt-4 leading-7 text-ink-700">{post.excerpt}</p>
              <p className="mt-auto pt-6 text-sm font-semibold text-sage-700">
                {post.readingTime}
              </p>
            </article>
          ))}
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
