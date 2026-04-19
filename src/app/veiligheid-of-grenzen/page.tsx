import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  fitCriteria,
  notFitCriteria,
  pageHeroes,
  referralSupport,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Veiligheid en grenzen",
  description:
    "Lees wanneer ACT-based coaching passend kan zijn en wanneer doorverwijzen of andere hulp logischer en veiliger is.",
  path: "/veiligheid-of-grenzen",
});

export default function VeiligheidPage() {
  const hero = pageHeroes.veiligheid;

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
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Passend voor coaching</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Wanneer coaching vaak helpend kan zijn.
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
            <p className="eyebrow mb-4">Niet passend voor coaching</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Wanneer andere hulp logischer is.
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

      <section className="page-shell pb-16 sm:pb-20">
        <SectionHeading
          description="Duidelijke grenzen zijn niet afstandelijk. Ze helpen juist om zorgvuldig te kijken wat iemand nodig heeft."
          eyebrow="Wat er dan gebeurt"
          title="Zo ziet eerlijk afstemmen eruit."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {referralSupport.map((item) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <h2 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h2>
              <p className="mt-4 leading-8 text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="card-surface mt-5 px-6 py-5 text-sm leading-7 text-ink-600 sm:px-8">
          {siteConfig.emergencyNotice}
        </p>
      </section>

      <CtaBanner
        description="Twijfel over passendheid hoeft je niet tegen te houden. We kunnen dat juist rustig samen verkennen in een eerste contactmoment."
        eyebrow="Veilig beginnen"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        title="Veiligheid en duidelijkheid mogen vanaf het begin voelbaar zijn."
      />
    </>
  );
}
