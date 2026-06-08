import { CtaBanner } from "@/components/cta-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { pageHeroes, pricingItems, pricingNotes, programSteps } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Tarieven | ACT coaching betaalbaar voor studenten",
  description:
    "Bekijk de tarieven voor ACT coaching bij ACT Vooruit: gratis online kennismaking, intake, losse sessies, studententarief en zakelijke opties op aanvraag.",
  path: "/tarieven",
});

const startOptions = [
  {
    title: "Gratis kennismaking",
    text: "Kort, vrijblijvend en bedoeld om te kijken of coaching past.",
  },
  {
    title: "Intake",
    text: "Een betaalde intake om je vraag en situatie helder te krijgen.",
  },
  {
    title: "Vervolg",
    text: "Losse sessies of een trajectvorm, afhankelijk van wat past.",
  },
];

const pricingQuestions = [
  {
    question: "Moet ik meteen een heel traject kopen?",
    answer: "Nee. Je start klein en bepaalt pas na kennismaking of intake wat logisch is.",
  },
  {
    question: "Is er een studententarief?",
    answer: "Ja. Voor intake en losse sessies is er een lager studententarief.",
  },
  {
    question: "Kan ik eerst kennismaken?",
    answer: "Ja. De gratis kennismaking is online en vrijblijvend.",
  },
  {
    question: "Wat als ik twijfel?",
    answer: "Dan is juist de kennismaking bedoeld om samen rustig te kijken of dit past.",
  },
];

export default function TarievenPage() {
  const hero = pageHeroes.tarieven;

  return (
    <>
      <section className="page-shell pt-8 sm:pt-10">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow mb-5">{hero.eyebrow}</p>
          <h1 className="font-display text-5xl leading-none text-ink-900 sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="lede mt-6 max-w-3xl">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={siteConfig.ctas.booking}>
              Plan een gratis kennismaking
            </ButtonLink>
            <ButtonLink href="/faq" variant="secondary">
              Lees veelgestelde vragen
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Zo kun je starten</p>
          <h2 className="section-title mt-4">
            Eerst kennismaken, daarna pas kiezen.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {startOptions.map((item) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={item.title}>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingItems.map((item) => (
            <article
              className={`card-surface flex flex-col px-6 py-7 sm:px-7 ${
                item.featured ? "border-clay-300 bg-white" : ""
              }`}
              key={item.name}
            >
              <p className="eyebrow mb-4">ACT Vooruit</p>
              <h2 className="font-display text-3xl leading-tight text-ink-900">
                {item.name}
              </h2>
              <p className="mt-5 text-2xl font-semibold leading-tight text-clay-700">
                {item.price}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink-600">
                {item.duration}
              </p>
              <p className="mt-5 leading-8 text-ink-700">{item.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <li className="pill text-xs" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <article className="editorial-frame bg-ink-900 px-6 py-7 text-white sm:px-8">
            <p className="eyebrow mb-4 text-sand-100">Rekening houden met je levensfase</p>
            <h2 className="font-display text-4xl leading-tight">
              Toegankelijk starten, zonder gedoe.
            </h2>
            <div className="mt-6 space-y-4 leading-8 text-white/80">
              {pricingNotes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="editorial-frame bg-white/90 px-6 py-7 sm:px-8">
            <p className="eyebrow mb-4">Traject-opbouw</p>
            <h2 className="font-display text-4xl leading-tight text-ink-900">
              Als je voor een traject kiest.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {programSteps.map((step) => (
                <div className="rounded-2xl bg-sand-50 px-4 py-4" key={step.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-700">
                    {step.label}
                  </p>
                  <h3 className="mt-2 font-semibold text-ink-900">{step.title}</h3>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="section-kicker">Veelgestelde tariefvragen</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {pricingQuestions.map((item) => (
              <article className="card-surface px-6 py-5" key={item.question}>
                <h3 className="font-semibold text-ink-900">{item.question}</h3>
                <p className="mt-3 leading-7 text-ink-600">{item.answer}</p>
              </article>
            ))}
          </div>
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
        title="Heb je een vraag?"
      />
    </>
  );
}
