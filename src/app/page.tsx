import { CtaBanner } from "@/components/cta-banner";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  faqItems,
  pageHeroes,
  painPoints,
  positioningCards,
  processSteps,
  whatActIs,
  whatActIsNot,
  whyKennismaking,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  path: "/",
});

export default function HomePage() {
  const hero = pageHeroes.home;

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
          href: siteConfig.ctas.werkwijze,
          label: "Lees hoe het werkt",
        }}
        title={hero.title}
      />

      <section className="page-shell pt-6">
        <div className="flex flex-wrap gap-3">
          {siteConfig.trustBadges.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="page-shell section-space">
        <SectionHeading
          description="Een rustige website moet snel duidelijk maken voor wie de praktijk is, wat je hier wel vindt en waarom een eerste stap laagdrempelig mag zijn."
          eyebrow="Voor wie ACT Vooruit is"
          title="Herkenning zonder grootspraak."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {positioningCards.map((card) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={card.title}>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {card.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <SectionHeading
          description="Niet iedereen gebruikt dezelfde woorden voor wat er speelt. Daarom helpt herkenning vaak meer dan diagnoses of zware labels."
          eyebrow="Waar je misschien in vastloopt"
          title="Veel voorkomende patronen."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item) => (
            <article
              className="card-surface px-6 py-6 text-base leading-8 text-ink-600"
              key={item}
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Wat ACT Vooruit is</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Praktische begeleiding met ACT als basis.
            </h2>
            <ul className="mt-6 space-y-4">
              {whatActIs.map((item) => (
                <li
                  className="rounded-2xl bg-sand-50 px-4 py-4 leading-8 text-ink-600"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Wat ACT Vooruit niet is</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Duidelijk in afbakening.
            </h2>
            <ul className="mt-6 space-y-4">
              {whatActIsNot.map((item) => (
                <li
                  className="rounded-2xl bg-white/90 px-4 py-4 leading-8 text-ink-600"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            description="Het proces blijft klein en duidelijk: eerst kennismaken, dan samen beoordelen wat passend is."
            eyebrow="Zo werkt het"
            title="Van eerste vraag naar werkbare stappen."
          />
          <ButtonLink href="/werkwijze" variant="secondary">
            Bekijk de volledige werkwijze
          </ButtonLink>
        </div>
        <ProcessSteps steps={processSteps} />
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <SectionHeading
          description="De kennismaking is bewust geen salesgesprek. Het doel is juist om druk weg te nemen en helder te krijgen of coaching logisch voelt."
          eyebrow="Waarom eerst kennismaken?"
          title="Zodat je niet meteen alles hoeft te weten."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {whyKennismaking.map((item) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            description="Een paar veelgestelde vragen geven alvast houvast als je nog aan het oriënteren bent."
            eyebrow="Veelgestelde vragen"
            title="Twijfels mogen er gewoon zijn."
          />
          <ButtonLink href="/faq" variant="secondary">
            Bekijk alle vragen
          </ButtonLink>
        </div>
        <FaqList items={faqItems.slice(0, 4)} />
      </section>

      <CtaBanner
        description="Je hoeft nog niet zeker te weten of coaching de juiste route is. Een eerste gesprek helpt juist om dat rustig samen te verkennen."
        eyebrow="Volgende stap"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: siteConfig.ctas.contact,
          label: "Neem contact op",
        }}
        title="Zet een eerste stap die laagdrempelig blijft."
      />
    </>
  );
}
