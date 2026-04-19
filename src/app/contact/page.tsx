import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Neem laagdrempelig contact op met ACT Vooruit voor een vraag of een gratis kennismakingsgesprek. Online en in regio Nijmegen.",
  path: "/contact",
});

export default function ContactPage() {
  const hero = pageHeroes.contact;

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
          href: `mailto:${siteConfig.contact.email}`,
          label: "Mail direct",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Contactformulier</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Vertel kort waar je contact over wilt.
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Je hoeft het niet perfect te formuleren. Een korte omschrijving van
              je vraag of situatie is genoeg om een eerste stap te zetten.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </article>

          <aside className="space-y-5">
            <article className="card-surface px-6 py-6 sm:px-8">
              <p className="eyebrow mb-4">Direct contact</p>
              <ul className="space-y-3 text-sm leading-7 text-ink-600">
                <li>
                  E-mail:
                  {" "}
                  <a
                    className="text-ink-900 underline decoration-ink-300 underline-offset-4"
                    href={`mailto:${siteConfig.contact.email}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>Regio: {siteConfig.region}</li>
                <li>Reactietijd: {siteConfig.contact.responseTime}</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href={`mailto:${siteConfig.contact.email}`} variant="secondary">
                  Stuur een e-mail
                </ButtonLink>
              </div>
            </article>

            <article className="card-surface px-6 py-6 sm:px-8">
              <p className="eyebrow mb-4">Goed om te weten</p>
              <p className="leading-8 text-ink-600">
                Oriënterend contact is welkom. Ook als je nog niet precies weet of
                coaching passend is, mag je gewoon een eerste vraag stellen.
              </p>
              <p className="mt-4 rounded-2xl bg-sand-50 px-4 py-4 text-sm leading-7 text-ink-600">
                Niet bedoeld voor spoed of crisis. Bij acute onveiligheid neem je
                direct contact op met 112 of met je huisarts/huisartsenpost.
              </p>
            </article>
          </aside>
        </div>
      </section>

      <CtaBanner
        description="Wil je liever niet eerst een formulier invullen? Een gratis kennismaking of gewone e-mail mag ook gewoon de eerste stap zijn."
        eyebrow="Liever eerst rustig kennismaken?"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: `mailto:${siteConfig.contact.email}`,
          label: "Mail direct",
        }}
        title="Kies de vorm die voor jou het laagst in drempel voelt."
      />
    </>
  );
}
