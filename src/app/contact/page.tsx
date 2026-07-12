import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact | Gratis kennismaking ACT Vooruit",
  description:
    "Neem contact op met ACT Vooruit voor ACT coaching, een vraag of een gratis online kennismaking. Vervolgsessies zijn fysiek op locatie in regio Nijmegen.",
  path: "/contact",
});

const expectationItems = [
  "kort verkennen waar je in vastloopt",
  "kijken wat je zoekt",
  "bespreken of coaching passend is",
  "ruimte voor praktische vragen",
];

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

      <section className="page-shell section-space" id="contactformulier">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="card-surface px-6 py-6 sm:px-8">
            <p className="eyebrow mb-4">Contactformulier</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Stel je vraag kort.
            </h2>
            <p className="mt-4 max-w-prose leading-8 text-ink-600">
              Je hoeft het niet perfect te formuleren. Een paar zinnen over waar
              je in vastloopt is genoeg.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </article>

          <aside className="space-y-5">
            <article className="card-surface px-6 py-6 sm:px-8">
              <p className="eyebrow mb-4">Wat we kunnen bespreken</p>
              <ul className="space-y-3">
                {expectationItems.map((item) => (
                  <li
                    className="rounded-2xl bg-sand-50 px-4 py-4 leading-7 text-ink-700"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface px-6 py-6 sm:px-8">
              <p className="eyebrow mb-4">Praktisch</p>
              <ul className="space-y-3 text-sm leading-7 text-ink-600">
                <li>
                  E-mail:{" "}
                  <a
                    className="text-ink-900 underline decoration-ink-300 underline-offset-4"
                    href={`mailto:${siteConfig.contact.email}`}
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>Locatie: {siteConfig.region}</li>
                <li>Reactietijd: {siteConfig.contact.responseTime}</li>
              </ul>
              <div className="mt-6">
                <ButtonLink href={`mailto:${siteConfig.contact.email}`} variant="secondary">
                  Mail direct
                </ButtonLink>
              </div>
            </article>

            <p className="rounded-[1.5rem] bg-ink-900 px-5 py-5 text-sm leading-7 text-white/80">
              Niet bedoeld voor spoed of crisis. Bij acute onveiligheid neem je
              direct contact op met 112 of met je huisarts/huisartsenpost.
            </p>
          </aside>
        </div>
      </section>

      <CtaBanner
        description="Wil je meteen een moment kiezen? De gratis kennismaking is kort, online en vrijblijvend."
        eyebrow="Liever meteen plannen?"
        primaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een gratis kennismaking",
        }}
        secondaryAction={{
          href: "/faq",
          label: "Lees de FAQ",
        }}
        title="Kies de route die voor jou het makkelijkst begint."
      />
    </>
  );
}
