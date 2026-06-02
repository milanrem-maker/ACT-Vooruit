import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { ButtonLink } from "@/components/ui/button-link";
import {
  aboutExpectations,
  aboutIntro,
  aboutStory,
  aboutValues,
  pageHeroes,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Over mij | Gelijkwaardige ACT coaching",
  description:
    "Lees meer over Milan Rem en de praktische, eerlijke en menselijke werkwijze achter ACT Vooruit.",
  path: "/over-mij",
});

export default function OverMijPage() {
  const hero = pageHeroes.overMij;

  return (
    <>
      <section className="page-shell pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Milan Rem, oprichter van ACT Vooruit"
              className="h-full min-h-[30rem] w-full rounded-[1.6rem] object-cover"
              height={1100}
              priority
              src="/images/milan-rem-portrait.png"
              width={900}
            />
          </div>

          <div className="card-surface flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12">
            <p className="eyebrow mb-5">{hero.eyebrow}</p>
            <h1 className="font-display text-5xl leading-none text-ink-900 sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>
            <p className="lede mt-6 max-w-prosewide">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.ctas.booking}>
                Plan een gratis kennismaking
              </ButtonLink>
              <ButtonLink href="/voor-wie" variant="secondary">
                Kijk of dit bij je past
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <article className="mx-auto max-w-4xl">
          <p className="section-kicker">Waarom ik ACT Vooruit ben gestart</p>
          <h2 className="section-title mt-4 text-balance">
            Praktische hulp had ik zelf graag eerder gehad.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-ink-700">
            {aboutIntro.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {aboutValues.map((item) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <p className="eyebrow mb-4">Mijn stijl</p>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <article className="mx-auto max-w-4xl border-y border-ink-100 py-10">
          <p className="section-kicker">Mijn verhaal</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
            Menselijk, maar wel helder.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-ink-700">
            {aboutStory.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article>
            <p className="section-kicker">Waarom ACT als basis</p>
            <h2 className="section-title mt-4 text-balance">
              Niet alles wegmaken, wel anders leren omgaan.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-8 text-ink-700">
              ACT helpt niet door moeilijke gedachten of gevoelens weg te maken,
              maar door er anders mee om te leren gaan. Daardoor ontstaat meer
              ruimte om te bewegen richting wat voor jou belangrijk is.
            </p>
          </article>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutExpectations.map((item) => (
              <p
                className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-5 leading-7 text-ink-700 shadow-soft"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        description="Een eerste gesprek helpt om te voelen of de manier van werken past, zonder dat je meteen iets hoeft vast te leggen."
        eyebrow="Verder kijken"
        primaryAction={{
          href: "/voor-wie",
          label: "Kijk of dit bij je past",
        }}
        secondaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        title="Kijk eerst of dit de juiste toon en route is."
      />
    </>
  );
}
