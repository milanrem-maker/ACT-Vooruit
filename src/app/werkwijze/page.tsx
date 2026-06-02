import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { actPrinciples, pageHeroes, processSteps, sessionExpectations } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Werkwijze | Gratis kennismaking en ACT coaching",
  description:
    "Lees hoe ACT Vooruit werkt: gratis kennismaking, intake, 1-op-1 ACT coaching en evaluatie. Praktisch, zorgvuldig en met duidelijke grenzen.",
  path: "/werkwijze",
});

export default function WerkwijzePage() {
  const hero = pageHeroes.werkwijze;

  return (
    <>
      <section className="page-shell pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
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
              <ButtonLink href="/tarieven" variant="secondary">
                Bekijk tarieven
              </ButtonLink>
            </div>
          </div>
          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Notitieboek en werkplek als rustige coaching-context"
              className="h-full min-h-[26rem] w-full rounded-[1.6rem] object-cover"
              height={860}
              priority
              src="/images/session-notes.svg"
              width={1200}
            />
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Stap voor stap</p>
          <h2 className="section-title mt-4 text-balance">
            Geen onduidelijk traject. Wel heldere stappen.
          </h2>
        </div>
        <ol className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li className="card-surface px-6 py-6" key={step.step}>
              <p className="eyebrow mb-4">Stap {step.step}</p>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{step.duration}</p>
              <p className="mt-4 leading-8 text-ink-700">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article>
            <p className="section-kicker">Mijn rol als coach</p>
            <h2 className="section-title mt-4 text-balance">
              Wat je van mij kunt verwachten.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-8 text-ink-700">
              Ik ben een sparringspartner. Ik bepaal niet voor jou wat de
              oplossing is, maar help om patronen te herkennen, overzicht te
              krijgen, te oefenen en terug te koppelen naar jouw doelen en
              waarden.
            </p>
          </article>
          <div className="grid gap-3 sm:grid-cols-2">
            {sessionExpectations.map((item) => (
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

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {actPrinciples.map((item) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <p className="eyebrow mb-4">ACT praktisch</p>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <article className="mx-auto max-w-4xl rounded-[2rem] bg-ink-900 px-6 py-8 text-white shadow-soft sm:px-10">
          <p className="eyebrow mb-4 text-sand-100">Helder over grenzen</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Coaching is geen behandeling.
          </h2>
          <p className="mt-5 max-w-prose leading-8 text-white/80">
            Als coaching niet passend is, zeg ik dat eerlijk. Bij acute crisis of
            ernstige psychische problematiek is andere hulp eerst logischer en
            veiliger.
          </p>
        </article>
      </section>

      <CtaBanner
        description="Een gratis kennismaking is genoeg om je vraag kort neer te leggen en samen te kijken of coaching logisch is."
        eyebrow="Volgende stap"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over grenzen",
        }}
        title="Begin klein, met overzicht en zonder druk."
      />
    </>
  );
}
