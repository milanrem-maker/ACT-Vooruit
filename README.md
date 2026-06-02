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
- Bookingflow:
  - Cal.com embed op `/gratis-kennismaking` zodra `NEXT_PUBLIC_CAL_BOOKING_URL` is ingevuld
  - tijdelijke eigen aanvraagflow als fallback zolang er nog geen Cal.com-link staat
  - Vercel-compatible route handler op `src/app/api/booking/route.ts`

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
- `src/app/api/booking/route.ts`: tijdelijke booking endpoint met webhook-optie en mailto-fallback als Cal.com nog niet gekoppeld is.

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
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/milan-rem-nshlib/kennismakingsgesprek-act-vooruit
NEXT_PUBLIC_BOOKING_URL=
CONTACT_FORM_WEBHOOK_URL=
CONTACT_FORM_WEBHOOK_SECRET=
BOOKING_FORM_WEBHOOK_URL=
BOOKING_FORM_WEBHOOK_SECRET=
```

### Formuliergedrag

- Als `CONTACT_FORM_WEBHOOK_URL` is ingesteld, stuurt de site formulierdata daarheen door.
- Als die variabele leeg blijft, opent het formulier als fallback de e-mailapp van de bezoeker met het bericht alvast ingevuld.

### Booking met Cal.com

- Vul `NEXT_PUBLIC_CAL_BOOKING_URL` met je Cal.com event-link. Voor ACT Vooruit is dat nu `https://cal.com/milan-rem-nshlib/kennismakingsgesprek-act-vooruit`.
- Cal.com beheert daarna de actuele beschikbaarheid op basis van de agenda die je in Cal.com hebt gekoppeld.
- Laat `NEXT_PUBLIC_CAL_BOOKING_URL` leeg als je tijdelijk de eigen aanvraagflow met vaste voorbeeldsloten wilt gebruiken.
- `NEXT_PUBLIC_BOOKING_URL` blijft alleen aanwezig als oude fallback, maar `NEXT_PUBLIC_CAL_BOOKING_URL` is de voorkeursinstelling.

## Belangrijkste aannames

- De praktijk richt zich op **studenten en young professionals**.
- De positionering blijft bewust smal: **ACT-based coaching**, geen behandeling of diagnostiek.
- De regio is voorlopig gezet op **Nijmegen, fysiek op locatie**. De gratis kennismaking is online.
- Cal.com is de bedoelde definitieve boekingssoftware zodra de event-link is ingevuld.
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
  - eventuele latere aanscherping van teksten, tarieven of trajectdetails
- In `.env.local` of Vercel:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_CAL_BOOKING_URL` als je de huidige Cal.com-link later wilt overschrijven
  - `NEXT_PUBLIC_BOOKING_URL`
  - `CONTACT_FORM_WEBHOOK_URL`
  - `CONTACT_FORM_WEBHOOK_SECRET`
  - `BOOKING_FORM_WEBHOOK_URL`
  - `BOOKING_FORM_WEBHOOK_SECRET`

## Korte changelog

- Losse statische HTML-start vervangen door een onderhoudbare Next.js-codebase.
- Complete informatiearchitectuur en rustige visuele stijl uitgewerkt voor ACT Vooruit.
- Centrale content- en configbestanden toegevoegd zodat kerngegevens op één plek aanpasbaar zijn.
- SEO, Open Graph, sitemap, robots en een bruikbare contactflow toegevoegd.

## Beeldrichting

- Homepage: echte, rustige fotografie gebruiken. Denk aan Milan in gesprek, aan een bureau, of in een neutrale werksetting. Geen wellness- of natuurbeeld als hoofdbeeld.
- Voor wie: studenten en young professionals in normale context, zoals studieplek, laptop, notitieboek, campus of koffiebar. Niet overdreven vrolijk of stockachtig.
- Werkwijze: praktische setting met notities, tafel, laptop of werkblad. Het beeld moet proces en overzicht uitstralen.
- Tarieven: rustig en clean houden. Liever weinig beeld dan afleidende stockfoto's.
- Over mij: echte foto's van Milan blijven leidend. Later eventueel aanvullen met foto's tijdens werk of gesprek, mits rustig en professioneel.
- Blog/thema's: gebruik herkenbare contextbeelden per thema, zoals uitstellen aan een bureau, keuzestress rond studie/werk of prestatiedruk in dagelijkse setting.

## Changelog mei 2026

- Homepage: opnieuw opgebouwd rond snelle herkenning, kortere blokken, concretere CTA's en een compact vertrouwensblok.
- Voor wie: doelgroep scherper gemaakt met scanbare herkenningspunten, levensfase-context en duidelijke wel/niet passend-afbakening.
- Werkwijze: proces teruggebracht naar vier heldere stappen en de rol van coach concreter gemaakt als sparringspartner.
- Tarieven: cleaner gemaakt met instaplogica, rustige prijsblokken, studentvriendelijke toelichting en korte tariefvragen.
- FAQ: antwoorden ingekort en sterker gericht op diagnose, therapie, ACT, online/fysiek, wachtlijst en doorverwijzen.
- Over mij: persoonlijk verhaal behouden, maar compacter gemaakt en sterker gekoppeld aan praktische begeleiding.
- Contact en gratis kennismaking: copy laagdrempeliger gemaakt, formulier korter gemaakt en Cal.com-booking ongemoeid gelaten.
- Footer en microcopy: CTA's aangescherpt naar kortere labels zoals "Plan een gratis kennismaking" en "Stel eerst een vraag".

## Nog niet gedaan

- Geen echte Git-branch, commit of pull request aangemaakt, omdat deze workspace op dit moment nog geen Git-repository is.
- Geen live Vercel deploy uitgevoerd.
- Cal.com is gekoppeld via de huidige ACT Vooruit event-link. Zet dezelfde variabele ook in Vercel.
- Geen externe mailprovider gekoppeld.
