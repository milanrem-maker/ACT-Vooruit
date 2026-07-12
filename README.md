# ACT Vooruit

Website voor ACT Vooruit, gebouwd met Next.js, TypeScript, de App Router en Tailwind CSS. De praktijk is nog in voorbereiding; de website maakt die status bewust zichtbaar.

## Belangrijkste routes

- `/`: homepage
- `/voor-wie`: doelgroep en herkenning
- `/werkwijze`: proces, rol en grenzen
- `/tarieven`: actuele tarieven en indicatieve trajectopbouw
- `/over-mij`: persoonlijk verhaal, opleiding en ervaring
- `/blog`: gepubliceerde en geplande artikelen
- `/blog/[slug]`: volledige gepubliceerde artikelen
- `/contact`: kort contactformulier
- `/gratis-kennismaking`: Cal.com-agenda, pas geladen na toestemming
- `/veiligheid-of-grenzen`: afbakening van coaching
- `/privacy`: volledige conceptprivacyverklaring
- `/intake/voorbereiding`: niet-geïndexeerde, niet-actieve intakevoorbereiding zonder formulier

## Lokaal starten

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open daarna `http://localhost:3000`.

## Kwaliteitscontrole

```bash
pnpm check
pnpm build
```

## Environment variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.actvooruit.nl
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/milan-rem-nshlib/kennismakingsgesprek-act-vooruit
NEXT_PUBLIC_BOOKING_URL=
CONTACT_FORM_WEBHOOK_URL=
CONTACT_FORM_WEBHOOK_SECRET=
```

`NEXT_PUBLIC_BOOKING_URL` is alleen een achterwaarts compatibele naam voor de Cal.com-link. Gebruik bij voorkeur `NEXT_PUBLIC_CAL_BOOKING_URL`.

## Gegevensstromen

De huidige code gebruikt aantoonbaar deze externe diensten:

- Vercel voor hosting en technische verzoek-/runtimegegevens.
- Cal.com voor het plannen van de online kennismaking.
- Gmail via `milan.rem@gmail.com` voor e-mailcorrespondentie.

Er is geen database, dossieropslag, analytics, errortracking, videodienst, boekhoudsoftware of transactionele maildienst in de repository geconfigureerd.

### Contactformulier

Het formulier valideert en beperkt de invoer server-side, bevat een honeypot en vraagt bezoekers geen medische gegevens te delen. Zonder `CONTACT_FORM_WEBHOOK_URL` opent de site een vooraf ingevulde e-mail in de e-mailapp van de bezoeker. De app slaat het bericht dan niet op.

Als later een webhook wordt ingesteld, moet eerst worden vastgesteld welke partij de gegevens ontvangt. Werk daarna de privacyverklaring en eventuele verwerkersafspraken bij.

### Cal.com

De Cal.com-iframe wordt pas na een bewuste klik geladen. Daardoor wordt niet direct bij het openen van de pagina externe Cal.com-inhoud geladen. Wijzigingen aan beschikbaarheid, bevestigingen en de locatie van het gesprek gebeuren in het Cal.com-account en zijn niet vanuit deze repository te controleren.

## Opvolgmail

Er is geen geconfigureerd systeem voor automatische transactionele e-mail. De herbruikbare template staat in `src/content/email-templates.ts` en moet voorlopig handmatig worden verstuurd. Zie `docs/handmatige-opvolgmail.md`.

Automatiseer de mail pas wanneer een maildienst én unieke, beveiligde intake-links goed zijn ingericht.

## Veilige intake

Er staat bewust geen live intakeformulier op de website. De route `/intake/voorbereiding`:

- staat niet in navigatie of sitemap;
- heeft `noindex` en is uitgesloten in `robots.ts`;
- verwerkt geen inzendingen;
- toont alleen welke beveiliging nog nodig is.

Zie `docs/veilige-intake.md` voor de technische en organisatorische voorwaarden vóór lancering.

## Blogbeheer

Blogmetadata en inhoud staan centraal in `src/content/blog-posts.ts`.

- `status: "published"` maakt een kaart aanklikbaar en genereert een artikelroute.
- `status: "upcoming"` toont de kaart als `Binnenkort` zonder link.
- Voeg alleen volledige artikelen toe aan `sections`.

Gepubliceerde artikelen worden automatisch aan de sitemap toegevoegd.

## Privacybeheer

De bewaartermijnen en aangetroffen leveranciers staan centraal in `src/content/privacy-policy.ts`. Controleer vóór de officiële start:

- de werkelijke Vercel-, Cal.com- en Google-accountinstellingen;
- internationale doorgifte en toepasselijke waarborgen;
- beschikbare verwerkersovereenkomsten;
- de actieve bewaartermijnen van platformlogs;
- of Cal.com-bevestigingen en online gespreksgegevens voor dit event correct staan ingesteld.

De privacypagina is een concept en moet opnieuw worden beoordeeld zodra opslag, een videodienst, boekhouding, analytics of andere leveranciers worden toegevoegd.

## Deployen via GitHub en Vercel

1. Controleer `pnpm check` en `pnpm build` lokaal.
2. Commit en push de wijzigingen naar de gekoppelde GitHub-repository.
3. Vercel bouwt de gekoppelde branch automatisch.
4. Controleer na de deployment de productie-URL, Cal.com-flow, contactfallback en alle environment variables.

Er zijn geen DNS-, domein- of Vercel-projectinstellingen nodig voor deze codewijziging.

## Voor de officiële lancering

- Rond de ACT-cursus af voordat de praktijk als gestart wordt gepresenteerd.
- Bepaal na de start van de opleiding in september hoeveel capaciteit realistisch is.
- Controleer Cal.com-bevestigingen, online locatie en privacy-instellingen in het account.
- Richt veilige intakeopslag, toegangscontrole, bewaartermijnen en intrekbare toestemming in.
- Kies en configureer pas daarna een transactionele maildienst als automatisering gewenst is.
- Controleer verwerkersafspraken met alle actieve leveranciers.
- Werk de privacyverklaring bij wanneer de technische inrichting verandert.
- Vervang illustratieve beeldvakken later door passende professionele fotografie.
