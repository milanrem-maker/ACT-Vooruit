import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  kennismakingIncluded,
  kennismakingNotIncluded,
  kennismakingSteps,
  pageHeroes,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gratis kennismaking",
  description:
    "Lees waarvoor een gratis kennismakingsgesprek bij ACT Vooruit bedoeld is, wat je kunt verwachten en wat er juist niet in zit.",
  path: "/gratis-kennismaking",
});

export default function GratisKennismakingPage() {
  const hero = pageHeroes.kennismaking;

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
          label: "Stel eerst een vraag",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Wel bedoeld voor</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Een rustige eerste verkenning.
            </h2>
            <ul className="mt-6 space-y-4">
              {kennismakingIncluded.map((item) => (
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
            <p className="eyebrow mb-4">Niet bedoeld voor</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Geen intake of behandeling.
            </h2>
            <ul className="mt-6 space-y-4">
              {kennismakingNotIncluded.map((item) => (
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
        <SectionHeading
          description="Deze opbouw is bewust simpel. Zo weet je vooraf beter waar je aan toe bent."
          eyebrow="Hoe het gesprek meestal verloopt"
          title="Drie rustige stappen."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {kennismakingSteps.map((item, index) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <p className="eyebrow mb-3">Stap {index + 1}</p>
              <h2 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        description="Veiligheid en passendheid blijven leidend. Als coaching niet de juiste route blijkt, bespreken we dat open en zorgvuldig."
        eyebrow="Laagdrempelig starten"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over veiligheid",
        }}
        title="Een eerste gesprek hoeft niet zwaar of groot te voelen."
      />
    </>
  );
}
