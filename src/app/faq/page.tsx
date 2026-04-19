import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqItems, pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Veelgestelde vragen over ACT Vooruit, coaching versus therapie, ACT, intake, kosten, doorverwijzen en gratis kennismaken.",
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
        <FaqList items={faqItems} />
      </section>

      <CtaBanner
        description="Staat je vraag er niet bij? Dan kun je ook gewoon laagdrempelig contact opnemen. Een korte vraag is genoeg."
        eyebrow="Nog een vraag?"
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Neem contact op",
        }}
        secondaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een kennismaking",
        }}
        title="Je hoeft niet eerst alles uitgezocht te hebben."
      />
    </>
  );
}
