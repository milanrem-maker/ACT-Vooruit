import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { pageHeroes, pricingItems, pricingNotes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tarieven",
  description:
    "Bekijk de tarieven van ACT Vooruit, inclusief gratis kennismakingsgesprek, intake, losse sessies, studententarief en trajectvoorbeeld.",
  path: "/tarieven",
});

export default function TarievenPage() {
  const hero = pageHeroes.tarieven;

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
        <SectionHeading
          description="De tarieven zijn bewust overzichtelijk gepresenteerd, zodat je snel ziet wat een logische eerste stap kan zijn."
          eyebrow="Overzicht"
          title="Rustige transparantie."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {pricingItems.map((item) => (
            <article
              className={`card-surface px-6 py-6 sm:px-8 ${
                item.featured ? "ring-1 ring-sage-300" : ""
              }`}
              key={item.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow mb-3">ACT Vooruit</p>
                  <h2 className="font-display text-3xl leading-tight text-ink-900">
                    {item.name}
                  </h2>
                </div>
                <span className="pill shrink-0">{item.duration}</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-clay-700">
                {item.price}
              </p>
              <p className="mt-4 leading-8 text-ink-600">{item.description}</p>
              <ul className="mt-5 space-y-3">
                {item.details.map((detail) => (
                  <li
                    className="rounded-2xl bg-sand-50 px-4 py-4 text-sm leading-7 text-ink-600"
                    key={detail}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="card-surface px-6 py-6 sm:px-8">
          <p className="eyebrow mb-4">Drempel verlagen</p>
          <h2 className="font-display text-4xl leading-tight text-ink-900">
            Eerst rustig verkennen, daarna pas beslissen.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricingNotes.map((item) => (
              <div
                className="rounded-2xl bg-white/90 px-4 py-4 leading-8 text-ink-600"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        description="Twijfel je of dit bij je past? Start dan niet met kiezen voor een traject, maar met een vrijblijvend eerste gesprek."
        eyebrow="Twijfel je nog?"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/faq",
          label: "Lees eerst de FAQ",
        }}
        title="Je hoeft niet meteen iets vast te leggen om te beginnen."
      />
    </>
  );
}
