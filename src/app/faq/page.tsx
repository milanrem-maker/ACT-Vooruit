import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqItems, pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ | ACT coaching, kosten en kennismaking",
  description:
    "Veelgestelde vragen over ACT coaching voor studenten: diagnose, therapie, kosten, gratis online kennismaking, fysieke sessies en doorverwijzen.",
  path: "/faq",
});

export default function FaqPage() {
  const hero = pageHeroes.faq;

  return (
    <>
      <PageHero
        asideItems={hero.asideItems}
        asideTitle={hero.asideTitle}
        description={hero.description}
        eyebrow={hero.eyebrow}
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel een vraag",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="mx-auto max-w-4xl">
          <FaqList items={faqItems} />
        </div>
      </section>

      <CtaBanner
        description="Staat je vraag er niet bij? Stel hem gerust kort. Je hoeft niet eerst precies te weten wat je nodig hebt."
        eyebrow="Heb je nog een vraag?"
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        title="Je hoeft niet eerst alles uitgezocht te hebben."
      />
    </>
  );
}
