import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intake in voorbereiding | ACT Vooruit",
  description:
    "De digitale intake van ACT Vooruit is nog niet beschikbaar en verwerkt geen inzendingen.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

const readinessItems = [
  "beveiligde opslag en beperkte toegang",
  "unieke links met een beperkte geldigheidsduur",
  "server-side validatie zonder gevoelige loginhoud",
  "duidelijke bewaartermijnen en verwerkersafspraken",
  "afzonderlijke uitdrukkelijke toestemming waar gezondheidsgegevens nodig zijn",
  "een werkende route om toestemming later in te trekken",
];

export default function IntakePreparationPage() {
  return (
    <main className="page-shell section-space">
      <section className="article-header mx-auto max-w-4xl">
        <p className="eyebrow mb-5">Niet actief · niet geïndexeerd</p>
        <h1 className="font-display text-5xl leading-none text-ink-900 sm:text-6xl">
          De digitale intake is nog in voorbereiding.
        </h1>
        <p className="lede mt-6">
          Op deze pagina staat bewust geen formulier. Er worden hier geen
          intakegegevens of gezondheidsgegevens verzameld of opgeslagen.
        </p>

        <h2 className="mt-10 font-display text-3xl text-ink-900">
          Wat vóór de start geregeld moet zijn
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {readinessItems.map((item) => (
            <li className="section-card text-sm leading-7 text-ink-700" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 leading-8 text-ink-700">
          De intake wordt alleen aangeboden na een kennismaking en nadat beide
          kanten denken dat coaching mogelijk past. Ga voor nu terug naar de{" "}
          <Link className="text-link" href="/gratis-kennismaking">
            kennismakingspagina
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
