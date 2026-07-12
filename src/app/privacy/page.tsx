import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { pageHeroes } from "@/content/site-content";
import { siteConfig } from "@/content/site-config";
import { privacyPolicy } from "@/content/privacy-policy";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Conceptprivacyverklaring | ACT Vooruit",
  description:
    "Lees welke persoonsgegevens ACT Vooruit verwerkt, waarom dat gebeurt, welke dienstverleners worden gebruikt en welke privacyrechten je hebt.",
  path: "/privacy",
});

const dataCategories = [
  {
    title: "Contactgegevens",
    items: [
      "naam",
      "e-mailadres",
      "optioneel telefoonnummer",
      "beschikbaarheid of voorkeur voor een dagdeel",
      "de korte inhoud van je bericht",
    ],
  },
  {
    title: "Boekingsgegevens",
    items: [
      "naam en e-mailadres",
      "gekozen datum en tijd",
      "gegevens die Cal.com nodig heeft om de afspraak te verwerken",
    ],
  },
  {
    title: "Communicatiegegevens",
    items: [
      "e-mails en praktische correspondentie",
      "afspraken, wijzigingen en opvolging",
    ],
  },
  {
    title: "Intake- en coachgegevens",
    items: [
      "alleen als je na de kennismaking bewust verdergaat",
      "je coachvraag en doelen",
      "relevante informatie die je zelf deelt",
      "eventuele korte werknotities",
    ],
  },
  {
    title: "Administratieve gegevens",
    items: [
      "factuur- en betaalgegevens",
      "gegevens die nodig zijn voor de financiële administratie",
    ],
  },
  {
    title: "Technische gegevens",
    items: [
      "beperkte verzoek-, apparaat- en beveiligingsgegevens die Vercel verwerkt voor hosting, werking en beveiliging",
      "technische gegevens die Cal.com kan verwerken nadat je de externe agenda bewust hebt geladen",
    ],
  },
];

export default function PrivacyPage() {
  const hero = pageHeroes.privacy;

  return (
    <>
      <PageHero
        asideItems={[
          "Concept voor de start van ACT Vooruit",
          "Geen analytics of marketingtracking gevonden",
          "Cal.com laadt pas na jouw keuze",
          "Privacyvragen zijn welkom per e-mail",
        ]}
        asideTitle={hero.asideTitle}
        description="Deze conceptprivacyverklaring beschrijft de huidige website en de werkwijze die voor de start van ACT Vooruit wordt voorbereid. De tekst wordt bijgewerkt als diensten of processen veranderen."
        eyebrow={hero.eyebrow}
        primaryAction={{
          href: `mailto:${siteConfig.contact.email}`,
          label: "Stel een privacyvraag",
        }}
        title="Zorgvuldig omgaan met persoonsgegevens."
      />

      <article className="page-shell section-space">
        <div className="article-body mx-auto max-w-4xl">
          <p className="mb-8 font-semibold text-ink-900">
            Laatst bijgewerkt: {privacyPolicy.lastUpdated}
          </p>

          <section className="privacy-section">
            <h2>1. Wie verantwoordelijk is</h2>
            <p>
              ACT Vooruit, geleid door Milan Rem in regio Nijmegen, is
              verwerkingsverantwoordelijke voor persoonsgegevens die via de
              website en de toekomstige coaching worden verwerkt. ACT Vooruit
              is nog in voorbereiding en nog niet officieel gestart.
            </p>
            <p>
              Voor vragen over privacy kun je mailen naar{" "}
              <a className="text-link" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Welke persoonsgegevens worden verwerkt</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {dataCategories.map((category) => (
                <section className="section-card" key={category.title}>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {category.title}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p className="mt-6">
              Intake- en coachgegevens kunnen informatie bevatten over mentale
              of lichamelijke gezondheid. Zulke informatie vraagt extra
              zorgvuldigheid en wordt pas verwerkt als daar een geldige basis
              en veilige inrichting voor bestaan.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Waarom gegevens worden gebruikt</h2>
            <ul>
              <li>reageren op een vraag;</li>
              <li>plannen en uitvoeren van een kennismaking;</li>
              <li>beoordelen of coaching passend is;</li>
              <li>voorbereiden en uitvoeren van een coachingsovereenkomst;</li>
              <li>communiceren over afspraken;</li>
              <li>voeren van de noodzakelijke financiële administratie;</li>
              <li>beveiligen en technisch laten functioneren van de website;</li>
              <li>voldoen aan wettelijke verplichtingen.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Juridische grondslagen</h2>
            <p>
              Bij een kennismaking of intake kan verwerking nodig zijn om op
              jouw verzoek stappen te nemen voordat een overeenkomst wordt
              gesloten. Tijdens coaching kan verwerking nodig zijn voor de
              uitvoering van de coachingsovereenkomst. Voor facturen en de
              financiële administratie geldt een wettelijke verplichting.
            </p>
            <p>
              Een beperkt gerechtvaardigd belang kan gelden voor noodzakelijke
              beveiliging en technische logging. Wanneer bijzondere
              persoonsgegevens, zoals gezondheidsgegevens, worden verwerkt en
              geen andere geldige uitzondering geldt, wordt vooraf om
              uitdrukkelijke toestemming gevraagd. Toestemming is niet de
              standaardgrondslag voor alle verwerking.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Bijzondere persoonsgegevens</h2>
            <p>
              Het algemene contactformulier en de boekingspagina zijn niet
              bedoeld voor medische dossiers, diagnoses, informatie over
              medicatie of uitgebreide gezondheidsinformatie. Deel daar alleen
              een korte, praktische vraag.
            </p>
            <p>
              Als een toekomstige intake informatie over gezondheid kan
              bevatten, wordt daarvoor afzonderlijk, duidelijk en uitdrukkelijk
              toestemming gevraagd. Je kunt die toestemming weer intrekken. Dat
              heeft geen terugwerkende kracht. ACT Vooruit verzamelt nooit meer
              dan nodig is voor de concrete coachvraag.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Met wie gegevens worden gedeeld</h2>
            <p>
              Technische dienstverleners kunnen gegevens verwerken voor hun
              afgesproken taak. In de huidige code en website zijn de volgende
              partijen aangetroffen:
            </p>
            <div className="mt-6 space-y-4">
              {privacyPolicy.providers.map((provider) => (
                <section className="section-card" key={provider.name}>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {provider.name}
                  </h3>
                  <p className="mt-2 text-base leading-7">{provider.purpose}</p>
                  <a
                    className="text-link mt-3 inline-flex text-sm font-semibold"
                    href={provider.privacyUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Lees de privacyinformatie van {provider.name}
                  </a>
                </section>
              ))}
            </div>
            <p className="mt-6">
              Er is geen boekhoudsoftware, videodienst, dossieropslag,
              analyticsdienst of externe formulierprovider in de repository
              aangetroffen. Als een webhook of andere dienst later wordt
              ingeschakeld, wordt deze verklaring eerst bijgewerkt. Voor de
              start wordt ook gecontroleerd welke verwerkersovereenkomst of
              passende gegevensbeschermingsovereenkomst nodig is.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Verwerking buiten de Europese Economische Ruimte</h2>
            <p>
              Vercel, Cal.com en Google kunnen persoonsgegevens buiten de EER
              verwerken. Vercel publiceert hiervoor onder meer een Data
              Processing Addendum met afspraken over internationale
              doorgifte. Cal.com en Google publiceren eigen privacy- en
              gegevensbeschermingsinformatie.
            </p>
            <p>
              Welke waarborg precies geldt, kan afhangen van de gekozen dienst,
              het account en de instellingen. Voor de officiële start moet dit
              per leverancier worden gecontroleerd, bijvoorbeeld op een
              adequaatheidsbesluit of modelcontractbepalingen. ACT Vooruit
              beweert daarom niet dat alle gegevens alleen in Europa blijven.
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Bewaartermijnen</h2>
            <ul>
              <li>
                Losse contactvragen van mensen die geen cliënt worden:{" "}
                {privacyPolicy.retention.contact}.
              </li>
              <li>
                Boekings- en kennismakingsgegevens:{" "}
                {privacyPolicy.retention.booking}.
              </li>
              <li>
                Intakegegevens en coachnotities:{" "}
                {privacyPolicy.retention.coaching}.
              </li>
              <li>
                Facturen en fiscale basisadministratie:{" "}
                {privacyPolicy.retention.financial}.
              </li>
              <li>
                Technische beveiligingslogs: {privacyPolicy.retention.technical}.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>9. Jouw privacyrechten</h2>
            <p>
              Je kunt vragen om inzage, correctie, verwijdering, beperking van
              verwerking of overdraagbaarheid wanneer dat van toepassing is.
              Je kunt bezwaar maken en een gegeven toestemming intrekken. Een
              verzoek kun je per e-mail indienen. ACT Vooruit reageert in
              beginsel binnen één maand.
            </p>
            <p>
              Verwijdering is niet altijd mogelijk als een wettelijke
              bewaarplicht geldt. Je kunt ook een klacht indienen bij de{" "}
              <a
                className="text-link"
                href="https://www.autoriteitpersoonsgegevens.nl/een-tip-of-klacht-indienen-bij-de-ap"
                rel="noreferrer"
                target="_blank"
              >
                Autoriteit Persoonsgegevens
              </a>
              .
            </p>
          </section>

          <section className="privacy-section">
            <h2>10. Beveiliging</h2>
            <p>
              ACT Vooruit bereidt passende maatregelen voor, zoals beperkte
              toegang, sterke wachtwoorden en waar mogelijk
              multifactorauthenticatie, beveiligde apparaten, versleutelde
              verbindingen, regelmatige updates, zorgvuldige keuze van
              dienstverleners en back-ups waar nodig. Beveiliging wordt voor de
              start van de praktijk verder ingericht en gecontroleerd.
            </p>
          </section>

          <section className="privacy-section">
            <h2>11. Cookies en analytics</h2>
            <p>
              In de repository is geen analytics-, advertentie- of
              marketingtracking aangetroffen. De website gebruikt wel
              technische hostingfuncties van Vercel. De externe Cal.com-agenda
              wordt pas geladen nadat je op de knop voor beschikbare momenten
              klikt. Vanaf dat moment kan Cal.com technische gegevens verwerken
              en eigen cookies of vergelijkbare technieken gebruiken.
            </p>
            <p>
              Op basis van de huidige website is daarom geen grote
              cookiebanner toegevoegd. Als later niet-functionele analytics of
              marketingcookies worden toegevoegd, worden die pas geladen na
              geldige toestemming en wordt deze verklaring aangepast.
            </p>
          </section>

          <section className="privacy-section">
            <h2>12. Wijzigingen en contact</h2>
            <p>
              Deze conceptprivacyverklaring kan veranderen wanneer de
              werkwijze, leveranciers of gebruikte systemen veranderen. De
              datum bovenaan laat zien wanneer de tekst voor het laatst is
              bijgewerkt.
            </p>
            <p>
              Heb je een privacyvraag? Mail dan naar{" "}
              <a className="text-link" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
              . Voor een algemene vraag kun je ook naar de{" "}
              <Link className="text-link" href="/contact">
                contactpagina
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
