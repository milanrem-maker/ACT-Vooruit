import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  actPrinciples,
  pageHeroes,
  processSteps,
  sessionExpectations,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Werkwijze",
  description:
    "Lees hoe ACT Vooruit werkt: gratis kennismaking, intake, 1-op-1 sessies en evaluatie, met ACT als praktische basis en heldere grenzen.",
  path: "/werkwijze",
});

export default function WerkwijzePage() {
  const hero = pageHeroes.werkwijze;

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
          href: "/veiligheid-of-grenzen",
          label: "Lees over veiligheid",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <SectionHeading
          description="Het proces is bewust overzichtelijk opgebouwd. Je hoeft niet meteen te weten hoeveel sessies je nodig hebt."
          eyebrow="Proces"
          title="Van kennismaking tot afronding."
        />
        <div className="mt-10">
          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <SectionHeading
          description="ACT wordt hier niet ingewikkeld gemaakt. Het gaat vooral om wat je in het dagelijks leven merkt en wat daarin helpend kan zijn."
          eyebrow="ACT simpel uitgelegd"
          title="Praktisch, niet zwaar."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {actPrinciples.map((item) => (
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
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="eyebrow mb-4">Tijdens sessies</p>
          <h2 className="font-display text-4xl leading-tight text-ink-900">
            Wat je concreet kunt verwachten.
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {sessionExpectations.map((item) => (
              <div
                className="rounded-2xl bg-sand-50 px-4 py-4 leading-8 text-ink-600"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-3xl border border-ink-100 bg-white/80 px-5 py-5 text-sm leading-7 text-ink-600">
            Coaching is niet in elke situatie de juiste eerste stap. Als ik denk
            dat jouw vraag beter past bij behandeling of andere hulp, dan bespreek
            ik dat eerlijk met je en denk ik mee over een passende vervolgstap.
          </p>
        </div>
      </section>

      <CtaBanner
        description="Een gratis kennismaking geeft vaak al rust, omdat je dan niet meer alleen hoeft te bedenken welke eerste stap logisch is."
        eyebrow="Volgende stap"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/tarieven",
          label: "Bekijk de tarieven",
        }}
        title="Begin klein, met overzicht en zonder druk."
      />
    </>
  );
}
