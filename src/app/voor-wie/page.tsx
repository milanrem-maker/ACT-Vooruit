import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  doelgroepSituaties,
  fitCriteria,
  notFitCriteria,
  pageHeroes,
  painPoints,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Voor wie",
  description:
    "Voor studenten en young professionals die vastlopen in piekeren, uitstellen, vermijden, onzekerheid en prestatiedruk, en een praktische eerste stap zoeken.",
  path: "/voor-wie",
});

export default function VoorWiePage() {
  const hero = pageHeroes.voorWie;

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
          label: "Lees over passendheid",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <SectionHeading
          description="Misschien herken je niet alles hieronder. Vaak is één of twee duidelijke patronen al genoeg om te merken dat je ondersteuning kunt gebruiken."
          eyebrow="Herken je dit?"
          title="Patronen die vaak spelen."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item) => (
            <article
              className="card-surface px-6 py-6 leading-8 text-ink-600"
              key={item}
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <SectionHeading
          description="De voorbeelden hieronder zijn bewust concreet gehouden, zodat je sneller kunt inschatten of jouw situatie erop lijkt."
          eyebrow="Studie, werk en dagelijks leven"
          title="Zo kan het eruitzien."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {doelgroepSituaties.map((item) => (
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
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Wanneer coaching passend kan zijn</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Een veilige, praktische eerste stap.
            </h2>
            <ul className="mt-6 space-y-4">
              {fitCriteria.map((item) => (
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
            <p className="eyebrow mb-4">Wanneer iets anders logischer is</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Heldere grenzen zijn juist helpend.
            </h2>
            <ul className="mt-6 space-y-4">
              {notFitCriteria.map((item) => (
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

      <CtaBanner
        description="Twijfel je of je vraag ‘erg genoeg’ is? Juist dan kan een rustige kennismaking helpen om dat samen te verkennen."
        eyebrow="Eerste stap"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        title="Je hoeft niet eerst zeker te weten of je hier mag aankloppen."
      />
    </>
  );
}
