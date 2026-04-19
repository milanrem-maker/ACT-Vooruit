import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";
import { pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "Lees hoe ACT Vooruit zorgvuldig omgaat met contactgegevens, berichten en minimale technische gegevens.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const hero = pageHeroes.privacy;

  return (
    <>
      <PageHero
        asideItems={hero.asideItems}
        asideTitle={hero.asideTitle}
        description={hero.description}
        eyebrow={hero.eyebrow}
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Neem contact op",
        }}
        secondaryAction={{
          href: siteConfig.ctas.booking,
          label: "Plan een kennismaking",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="card-surface space-y-10 px-6 py-6 sm:px-8">
          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Welke gegevens
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Als je contact opneemt, gaat het meestal om je naam, e-mailadres en
              de informatie die je zelf deelt in een bericht. De site vraagt geen
              account aan en gebruikt geen dashboard of uitgebreide profielopbouw.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Waarvoor die gegevens worden gebruikt
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Gegevens worden alleen gebruikt om op je vraag te reageren, een
              eerste gesprek af te stemmen of passendheid te verkennen. Er is geen
              marketingautomatisering of zware tracking toegevoegd in deze eerste
              versie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Contactformulier en mail
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Berichten via het formulier of per e-mail worden alleen gebruikt om
              op je vraag te reageren of een eerste gesprek af te stemmen. Er
              worden geen uitgebreide profielen opgebouwd.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Jouw vragen
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Wil je iets laten aanpassen of heb je een vraag over gegevens die je
              hebt gedeeld, neem dan contact op via
              {" "}
              <a
                className="text-ink-900 underline decoration-ink-300 underline-offset-4"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
