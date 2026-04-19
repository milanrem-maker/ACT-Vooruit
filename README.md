# ACT Vooruit

Een productiegerichte eerste versie van een website voor coachpraktijk **ACT Vooruit**, gebouwd met **Next.js**, **TypeScript**, **App Router** en **Tailwind CSS**. De site is opgezet voor deployment op **Vercel** en houdt content, contactgegevens, CTA-links, tarieven en FAQ-items zoveel mogelijk centraal.

## Wat er gebouwd is

- Volledige routestructuur:
  - `/`
  - `/voor-wie`
  - `/werkwijze`
  - `/tarieven`
  - `/over-mij`
  - `/faq`
  - `/contact`
  - `/gratis-kennismaking`
  - `/veiligheid-of-grenzen`
  - `/privacy`
  - `/disclaimer`
- Rustige, warme visuele stijl zonder klinische GGZ-uitstraling of generieke coachsite-cliches.
- Centrale datafiles voor:
  - bedrijfsinformatie en CTA's
  - tarieven
  - FAQ
  - page hero copy
  - positionering en procescontent
- Basis-SEO:
  - metadata per pagina
  - `robots.ts`
  - `sitemap.ts`
  - Open Graph image route
  - favicon via `src/app/icon.svg`
- Contactflow:
  - bruikbaar contactformulier
  - Vercel-compatible route handler op `src/app/api/contact/route.ts`
  - nette `mailto:` fallback als er nog geen webhook of maildienst is gekoppeld

## Projectstructuur

```text
src/
  app/
  components/
  content/
  lib/
```

- `src/content/site-config.ts`: sitebrede instellingen zoals naam, e-mail, regio, CTA's, navigatie en SEO defaults.
- `src/content/site-content.ts`: inhoudelijke blokken zoals FAQ, processtappen, tarieven, positionering en paginahero's.
- `src/app/api/contact/route.ts`: simpele contact endpoint met webhook-optie en mailto-fallback.

## Lokaal starten

1. Installeer dependencies:

```bash
pnpm install
```

2. Maak een lokale env-file:

```bash
cp .env.example .env.local
```

3. Start de ontwikkelserver:

```bash
pnpm dev
```

4. Open daarna:

```text
http://localhost:3000
```

## Build controleren

```bash
pnpm build
pnpm start
```

Optioneel:

```bash
pnpm check
```

## Deployen op Vercel

1. Push de code naar een GitHub-repository.
2. Importeer de repository in Vercel.
3. Zet in Vercel de benodigde environment variables.
4. Deploy de branch; Vercel herkent Next.js automatisch.

Aanbevolen environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.actvooruit.nl
NEXT_PUBLIC_BOOKING_URL=
CONTACT_FORM_WEBHOOK_URL=
CONTACT_FORM_WEBHOOK_SECRET=
```

### Formuliergedrag

- Als `CONTACT_FORM_WEBHOOK_URL` is ingesteld, stuurt de site formulierdata daarheen door.
- Als die variabele leeg blijft, opent het formulier als fallback de e-mailapp van de bezoeker met het bericht alvast ingevuld.

## Belangrijkste aannames

- De praktijk richt zich op **studenten en young professionals**.
- De positionering blijft bewust smal: **ACT-based coaching**, geen behandeling of diagnostiek.
- De regio is voorlopig gezet op **Nijmegen en online**.
- Er is nog geen definitieve boekingssoftware gekoppeld.
- Er is nog geen volledige maildienst of CRM gekoppeld.

## Nog in te vullen placeholders

Werk deze punten bij voordat je live gaat:

- In `src/content/site-config.ts`:
  - `contact.email`
  - `contact.location`
  - `region`
  - `coach.name`
  - `coach.title`
  - `socials.linkedin`
  - `socials.instagram`
- In `src/content/site-content.ts`:
  - persoonlijke tekst op de pagina `over-mij`
  - definitieve tarieven
  - eventuele intake- of trajectdetails
- In `.env.local` of Vercel:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_BOOKING_URL`
  - `CONTACT_FORM_WEBHOOK_URL`
  - `CONTACT_FORM_WEBHOOK_SECRET`

## Korte changelog

- Losse statische HTML-start vervangen door een onderhoudbare Next.js-codebase.
- Complete informatiearchitectuur en rustige visuele stijl uitgewerkt voor ACT Vooruit.
- Centrale content- en configbestanden toegevoegd zodat kerngegevens op één plek aanpasbaar zijn.
- SEO, Open Graph, sitemap, robots en een bruikbare contactflow toegevoegd.

## Nog niet gedaan

- Geen echte Git-branch, commit of pull request aangemaakt, omdat deze workspace op dit moment nog geen Git-repository is.
- Geen live Vercel deploy uitgevoerd.
- Geen externe boekings- of mailprovider gekoppeld.
