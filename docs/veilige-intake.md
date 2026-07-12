# Voorbereiding veilige intake

De repository bevat geen database, dossieropslag of authenticatie. Daarom staat er geen live intakeformulier op de website.

## Gewenste klantreis

1. Iemand plant een gratis kennismaking.
2. Tijdens het gesprek wordt bekeken of coaching mogelijk passend is.
3. Alleen bij een passend vervolg ontvangt de persoon een opvolgmail.
4. Die mail bevat later een unieke, beperkt geldige intake-link.
5. Na beoordeling wordt pas een intake gepland.

## Nodig vóór activatie

- Beveiligde opslag met versleutelde verbindingen en beperkte toegang.
- Een concreet toegangsbeleid en multifactorauthenticatie waar mogelijk.
- Unieke tokens die verlopen en niet in openbare navigatie of analytics terechtkomen.
- Server-side validatie en dataminimalisatie.
- Geen logging van gevoelige formulierinhoud.
- Centraal ingestelde bewaartermijnen en een verwijderproces.
- Passende verwerkersovereenkomsten met opslag- en mailleveranciers.
- Een privacyverklaring die de daadwerkelijke gegevensstroom beschrijft.
- Registratie van het moment, doel en de versie van uitdrukkelijke toestemming.
- Een uitvoerbare route om toestemming in te trekken.

## Concepttoestemming

Wanneer gezondheidsgegevens nodig zijn en de juridische inrichting dit ondersteunt, kan ongeveer deze tekst worden gebruikt:

> Ik geef uitdrukkelijk toestemming dat ACT Vooruit de gegevens die ik in dit intakeformulier deel, waaronder mogelijk informatie over mijn mentale of lichamelijke gezondheid, verwerkt om te beoordelen of coaching passend is en om de coaching voor te bereiden en uit te voeren. Ik weet dat ik deze toestemming kan intrekken.

Laat de uiteindelijke juridische en technische inrichting vóór lancering controleren. De huidige route `/intake/voorbereiding` is alleen een niet-actieve conceptpagina en verwerkt niets.
