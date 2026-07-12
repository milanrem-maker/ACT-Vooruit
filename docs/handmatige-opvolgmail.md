# Handmatige opvolgmail na de kennismaking

Er is nog geen transactionele maildienst geconfigureerd. Verstuur deze opvolging daarom voorlopig handmatig vanuit het huidige e-mailadres.

## Voorwaarden

- Stuur de mail alleen als coaching mogelijk passend lijkt en de persoon verder wil.
- Gebruik pas een intake-link wanneer die uniek, beveiligd en beperkt geldig is.
- Gebruik geen algemene openbare link naar een formulier met gevoelige gegevens.
- Is er nog geen veilige intake-link, stuur de mail dan nog niet met een formulierlink en stem de vervolgstap handmatig af.

## Template

De herbruikbare codeversie staat in `src/content/email-templates.ts`.

**Onderwerp:** Fijn dat we hebben kennisgemaakt

```text
Hoi [voornaam],

Bedankt voor ons gesprek. Ik ben benieuwd hoe jij de kennismaking hebt ervaren.

Denk je dat je verder wilt met een intake? Dan kun je via de veilige link hieronder de volgende stap zetten:

[unieke, beveiligde intake-link]

Neem rustig de tijd om het formulier in te vullen. Deel alleen informatie die relevant is voor je coachvraag. Na ontvangst neem ik binnen twee werkdagen contact met je op om de intake af te stemmen.

Twijfel je nog? Dan hoef je nu niets te beslissen. Je kunt ook eerst op deze mail reageren met een vraag.

Met vriendelijke groet,

Milan Rem
ACT Vooruit
```

## Later automatiseren

Automatisering kan pas veilig worden toegevoegd wanneer:

- een maildienst is gekozen en geconfigureerd;
- het verzenddomein is geverifieerd;
- veilige intake-links server-side kunnen worden aangemaakt en ingetrokken;
- de privacyverklaring en verwerkersafspraken zijn bijgewerkt;
- verzending en fouten worden gelogd zonder gevoelige formulierinhoud vast te leggen.
