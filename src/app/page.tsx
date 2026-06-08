import Image from "next/image";

import { CtaBanner } from "@/components/cta-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { faqItems, homeVisuals, processSteps, whatActIs, whatActIsNot } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  path: "/",
});

const trustItems = [
  "gratis kennismaking",
  "online",
  "20-30 minuten",
  "vrijblijvend",
  "geen diagnose nodig",
];

const doelgroepBullets = [
  "je loopt vast in keuzes of uitstelgedrag",
  "spanning of twijfel kost veel energie",
  "je wilt hulp die praktisch en niet te zwaar voelt",
];

const faqPreview = faqItems.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <section className="page-shell pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="card-surface flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:py-16">
            <p className="eyebrow mb-5">
              ACT-based coaching voor studenten en young professionals
            </p>
            <h1 className="font-display text-5xl leading-[0.95] text-ink-900 sm:text-6xl lg:text-7xl">
              Loop je vast?
            </h1>
            <p className="lede mt-6 max-w-prosewide">
              ACT Vooruit is een praktische eerste stap voor studenten en young
              professionals die blijven hangen in onrust, vermijding of
              prestatiedruk. Geen therapie, maar heldere begeleiding om weer in
              beweging te komen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={siteConfig.ctas.booking}>
                Plan een gratis kennismaking
              </ButtonLink>
              <ButtonLink href="/voor-wie" variant="secondary">
                Kijk of dit bij je past
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustItems.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Milan Rem, coach bij ACT Vooruit"
              className="h-full min-h-[28rem] w-full rounded-[1.6rem] object-cover"
              height={1100}
              priority
              src="/images/milan-rem-portrait.png"
              width={900}
            />
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Misschien herken je dit</p>
          <h2 className="section-title mt-4">Je zit niet lekker in je vel.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {homeVisuals.map((item) => (
            <article className="editorial-frame bg-white/90 p-3" key={item.title}>
              <Image
                alt=""
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                height={860}
                src={item.image}
                width={1200}
              />
              <div className="px-3 py-5">
                <h3 className="font-display text-3xl leading-tight text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-ink-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Voor wie</p>
            <h2 className="section-title mt-4 text-balance">
              Voor studenten en professionals die vastlopen.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-8 text-ink-700">
              ACT Vooruit is er voor mensen die merken dat piekeren, vermijden,
              onzekerheid of prestatiedruk te veel ruimte innemen in studie,
              werk of dagelijks leven.
            </p>
            <div className="mt-7">
              <ButtonLink href="/voor-wie" variant="secondary">
                Lees voor wie dit is
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {doelgroepBullets.map((item) => (
              <p
                className="flex min-h-36 items-center rounded-[1.7rem] border border-white/70 bg-white/80 px-6 py-7 text-lg leading-8 text-ink-700 shadow-soft"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-surface px-6 py-7 sm:px-8">
            <p className="eyebrow mb-4">Wat je hier wel krijgt</p>
            <ul className="space-y-3 leading-8 text-ink-700">
              {whatActIs.map((item) => (
                <li className="rounded-2xl bg-sand-50 px-4 py-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface px-6 py-7 sm:px-8">
            <p className="eyebrow mb-4">Wat dit niet is</p>
            <ul className="space-y-3 leading-8 text-ink-700">
              {whatActIsNot.map((item) => (
                <li className="rounded-2xl bg-white/90 px-4 py-4" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="mx-auto mt-6 max-w-4xl rounded-[1.5rem] bg-ink-900 px-6 py-5 text-center leading-8 text-white/85">
          Ik ben geen behandelaar, maar een sparringspartner die helpt om helder
          te krijgen wat er speelt en wat een logische volgende stap is.
        </p>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Zo werkt het</p>
          <h2 className="section-title mt-4">Begin klein en duidelijk.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.slice(0, 3).map((step) => (
            <article className="card-surface px-6 py-6 sm:px-8" key={step.step}>
              <p className="eyebrow mb-4">Stap {step.step}</p>
              <h3 className="font-display text-3xl leading-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-4 leading-8 text-ink-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="editorial-frame bg-white/90 p-4">
            <Image
              alt="Milan Rem"
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              height={1100}
              src="/images/milan-rem-portrait.png"
              width={900}
            />
          </div>
          <article>
            <p className="section-kicker">Waarom ik dit doe</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink-900 sm:text-5xl">
              Ik weet hoe lastig het kan zijn.
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-8 text-ink-700">
              ACT Vooruit is ook persoonlijk voor mij. Ik weet hoe het is om vast
              te lopen in piekeren, vermijding en prestatiedruk. Juist daarom wil
              ik begeleiding bieden die eerlijk, praktisch en laagdrempelig is.
            </p>
            <div className="mt-7">
              <ButtonLink href="/over-mij" variant="secondary">
                Meer over mij
              </ButtonLink>
            </div>
          </article>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Vragen die vaak eerst spelen</p>
          <h2 className="section-title mt-4">Twijfel is normaal.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqPreview.map((item) => (
            <article className="card-surface px-6 py-5" key={item.question}>
              <h3 className="text-lg font-semibold text-ink-900">{item.question}</h3>
              <p className="mt-3 leading-7 text-ink-600">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <ButtonLink href="/faq" variant="secondary">
            Lees alle vragen
          </ButtonLink>
        </div>
      </section>

      <CtaBanner
        description="Om helder te krijgen wat jij nu nodig hebt, kun je klein beginnen met een vraag. Misschien twijfel je nog. Dat is heel normaal."
        eyebrow="Eerste stap"
        primaryAction={{
          href: siteConfig.ctas.contact,
          label: "Stel eerst een vraag",
        }}
        secondaryAction={{
          href: "/veiligheid-of-grenzen",
          label: "Lees over grenzen",
        }}
        title="Wat er ook speelt, neem gerust contact op."
      />
    </>
  );
}
