import { CalBookingEmbed } from "@/components/cal-booking-embed";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import {
  kennismakingIncluded,
  kennismakingNotIncluded,
  pageHeroes,
} from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Gratis kennismaking | ACT coaching voor studenten",
  description:
    "Plan een gratis kennismaking voor ACT coaching bij ACT Vooruit. Kort, online, vrijblijvend en bedoeld om te kijken of coaching past.",
  path: "/gratis-kennismaking",
});

export default function GratisKennismakingPage() {
  const hero = pageHeroes.kennismaking;
  const availabilityNote = siteConfig.booking.availabilityNote;

  return (
    <>
      <PageHero
        asideItems={hero.asideItems}
        asideTitle={hero.asideTitle}
        description={hero.description}
        eyebrow={hero.eyebrow}
        primaryAction={{
          href: "#boeken",
          label: "Kies een moment",
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
            <p className="eyebrow mb-4">Wat we in dit gesprek doen</p>
            <ul className="space-y-3">
              {kennismakingIncluded.map((item) => (
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
            <p className="eyebrow mb-4">Wat je niet hoeft</p>
            <ul className="space-y-3">
              {kennismakingNotIncluded.map((item) => (
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

      <section className="page-shell pb-12 sm:pb-14">
        <div className="grid gap-3 sm:grid-cols-4">
          <p className="pill">Duur: {siteConfig.booking.duration}</p>
          <p className="pill">{siteConfig.booking.location}</p>
          <p className="pill">Vrijblijvend</p>
          <p className="pill">Geen diagnose nodig</p>
        </div>
      </section>

      <CalBookingEmbed
        availabilityNote={availabilityNote}
        calUrl={siteConfig.booking.calComUrl}
        duration={siteConfig.booking.duration}
        location={siteConfig.booking.location}
        sessionLabel={siteConfig.booking.sessionLabel}
      />

      <section className="page-shell pb-16 sm:pb-20">
        <div className="section-panel mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="section-card">
            <p className="eyebrow mb-4">Na het gesprek</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Wat gebeurt er na de kennismaking?
            </h2>
            <p className="mt-5 leading-8 text-ink-700">
              Na de kennismaking hoef je niet meteen te beslissen. Als we
              allebei denken dat coaching past en jij verder wilt, ontvang je
              een korte opvolgmail. Daarin staat hoe je een intake kunt
              aanvragen en welke informatie daarvoor nodig is. Daarna plannen
              we pas de intake.
            </p>
          </article>

          <aside className="section-card">
            <p className="eyebrow mb-4">Goed om te weten</p>
            <ul className="space-y-3 leading-7 text-ink-700">
              <li className="rounded-2xl bg-sand-50 px-4 py-4">
                De kennismaking is geen volledige coachsessie.
              </li>
              <li className="rounded-2xl bg-white px-4 py-4">
                Je hoeft vooraf geen uitgebreid verhaal in te vullen.
              </li>
              <li className="rounded-2xl bg-sand-50 px-4 py-4">
                Je hoeft tijdens het gesprek niet direct te beslissen.
              </li>
              <li className="rounded-2xl bg-white px-4 py-4">
                De kennismaking is niet bedoeld voor crisis- of spoedvragen.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBanner
        description="Misschien twijfel je nog. Dat is heel normaal. Neem gerust contact op."
        eyebrow="Eerste vraag"
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over grenzen",
        }}
        size="large"
        title="Heb je een vraag?"
        visual={{
          alt: "Illustratie van een online kennismakingsgesprek",
          src: "/images/consult-call-placeholder.svg",
        }}
      />
    </>
  );
}
