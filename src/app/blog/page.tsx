import Image from "next/image";
import Link from "next/link";

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
              alt="Rustige blogvisual met notities"
              className="h-full min-h-[28rem] w-full rounded-[1.6rem] object-cover"
              height={860}
              priority
              src="/images/session-notes.svg"
              width={1200}
            />
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-kicker">Artikelen</p>
            <nav aria-label="Blog artikelen" className="mt-5 space-y-3">
              {blogPosts.map((post) => (
                <Link
                  className="block rounded-2xl border border-ink-100 bg-white/70 px-4 py-4 text-sm leading-6 text-ink-700 hover:border-sage-300 hover:text-ink-900"
                  href={`#${post.slug}`}
                  key={post.slug}
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="space-y-16">
            {blogPosts.map((post) => (
              <article
                className="border-b border-ink-100 pb-14 last:border-b-0"
                id={post.slug}
                key={post.slug}
              >
                <p className="eyebrow mb-4">{post.eyebrow}</p>
                <h2 className="font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm text-ink-600">{post.readingTime}</p>
                <p className="mt-6 text-xl leading-8 text-ink-700">
                  {post.excerpt}
                </p>
                <div className="mt-8 space-y-6 text-lg leading-8 text-ink-700">
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        description="Als je na het lezen wilt aftasten of coaching past, is een gratis kennismaking de meest logische eerste stap."
        eyebrow="Na het lezen"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over grenzen",
        }}
        title="Meer lezen mag. Klein beginnen mag ook."
      />
    </>
  );
}
