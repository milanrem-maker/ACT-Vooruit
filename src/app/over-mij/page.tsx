import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  aboutExpectations,
  aboutIntro,
  aboutValues,
  pageHeroes,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Over mij",
  description:
    "Lees meer over de rustige, praktische en gelijkwaardige werkwijze achter ACT Vooruit en de duidelijke afbakening tussen coaching en behandeling.",
  path: "/over-mij",
});

export default function OverMijPage() {
  const hero = pageHeroes.overMij;

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
          label: "Neem contact op",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-surface px-6 py-6 sm:px-8">
            <SectionHeading
              eyebrow="Persoonlijke introductie"
              title="Warm en helder, zonder zware beloftes."
            />
            <div className="mt-6 space-y-5">
              {aboutIntro.map((item) => (
                <p className="leading-8 text-ink-600" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Hoe ik werk</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Wat je van mij mag verwachten.
            </h2>
            <div className="mt-8 space-y-4">
              {aboutValues.map((item) => (
                <div className="rounded-2xl bg-sand-50 px-4 py-4" key={item.title}>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-8 text-ink-600">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="eyebrow mb-4">In de praktijk</p>
          <h2 className="font-display text-4xl leading-tight text-ink-900">
            Wat belangrijk blijft in elk contact.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {aboutExpectations.map((item) => (
              <div
                className="rounded-2xl bg-white/90 px-4 py-4 leading-8 text-ink-600"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-3xl border border-ink-100 bg-sand-50 px-5 py-5 text-sm leading-7 text-ink-600">
            Ik vind het belangrijk dat begeleiding zorgvuldig blijft en niet groter
            wordt gemaakt dan nodig. Daarom blijft afstemming over tempo,
            passendheid en grenzen steeds onderdeel van het contact.
          </p>
        </div>
      </section>

      <CtaBanner
        description="Een eerste gesprek helpt meestal sneller dan nog langer alleen blijven afwegen of je vraag wel ‘groot genoeg’ is."
        eyebrow="Verder kijken"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/werkwijze",
          label: "Lees de werkwijze",
        }}
        title="Voel rustig of deze manier van werken bij je past."
      />
    </>
  );
}
