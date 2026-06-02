import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import {
  doelgroepSituaties,
  fitCriteria,
  notFitCriteria,
  pageHeroes,
  painPoints,
  supportSources,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Voor wie | ACT coaching voor studenten",
  description:
    "ACT coaching voor studenten en young professionals die vastlopen in piekeren, uitstellen, vermijden, onzekerheid, keuzestress of prestatiedruk.",
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
          href: "/werkwijze",
          label: "Hoe werkt het?",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Waar je in kunt vastlopen</p>
          <h2 className="section-title mt-4 text-balance">
            Herkenbaar in studie, werk of dagelijks leven.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <article
              className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-5 font-semibold leading-7 text-ink-800 shadow-soft"
              key={item}
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <article>
            <p className="section-kicker">Deze levensfase vraagt veel</p>
            <h2 className="section-title mt-4 text-balance">
              Het is logisch dat het soms schuurt.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-8 text-ink-700">
              Studie, keuzes, prestatiedruk, sociale vergelijking en de eerste
              jaren van werk kunnen veel onrust geven. Juist dan helpt het als
              begeleiding praktisch, helder en niet te zwaar voelt.
            </p>
          </article>

          <aside className="editorial-frame bg-white/90 px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Onderbouwing</p>
            <div className="space-y-4">
              {supportSources.map((source) => (
                <a
                  className="block rounded-[1.5rem] bg-sand-50 px-4 py-4 hover:bg-white"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <h3 className="font-semibold text-ink-900">{source.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-600">
                    {source.description}
                  </p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
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
            <p className="eyebrow mb-4">Dit past mogelijk bij jou als</p>
            <ul className="space-y-3">
              {fitCriteria.map((item) => (
                <li
                  className="rounded-2xl bg-sand-50 px-4 py-4 leading-8 text-ink-700"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Dit past minder goed als</p>
            <ul className="space-y-3">
              {notFitCriteria.map((item) => (
                <li
                  className="rounded-2xl bg-white/90 px-4 py-4 leading-8 text-ink-700"
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
        description="Twijfel je? In een gratis kennismaking kijken we samen eerlijk of coaching nu passend is."
        eyebrow="Eerste stap"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        title="Je hoeft niet zeker te weten of je hier precies goed zit."
      />
    </>
  );
}
