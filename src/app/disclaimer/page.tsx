import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";
import { pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";

export const metadata = createMetadata({
  title: "Disclaimer | Coaching is geen therapie",
  description:
    "Lees de afbakening van ACT Vooruit: ACT coaching is geen therapie, diagnostiek, behandeling of crisiszorg.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const hero = pageHeroes.disclaimer;

  return (
    <>
      <PageHero
        asideItems={hero.asideItems}
        asideTitle={hero.asideTitle}
        description={hero.description}
        eyebrow={hero.eyebrow}
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over veiligheid",
        }}
        title={hero.title}
      />

      <section className="page-shell section-space">
        <div className="card-surface space-y-10 px-6 py-6 sm:px-8">
          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Geen behandeling of diagnostiek
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              De website en begeleiding van ACT Vooruit zijn bedoeld voor
              coaching. Dat betekent dat ze geen therapie, medische behandeling of
              diagnostiek vervangen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Geen spoed- of crisiszorg
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Bij acute onveiligheid, crisis of ernstige ontregeling is coaching
              geen passende route. Neem dan direct contact op met 112 of met je
              huisarts/huisartsenpost.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Geen garanties of medische claims
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              De inhoud van deze website is informatief bedoeld en doet geen
              beloftes over uitkomsten. Coaching kan helpend zijn, maar wat
              passend is verschilt per situatie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Eerlijke afstemming
            </h2>
            <p className="mt-4 max-w-prosewide leading-8 text-ink-600">
              Als jouw vraag waarschijnlijk beter past bij behandeling of andere
              hulp, dan wordt dat benoemd. Veiligheid en passendheid gaan altijd
              voor snelheid of gemak.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
