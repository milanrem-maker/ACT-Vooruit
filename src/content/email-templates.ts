type FollowUpEmailInput = {
  firstName: string;
  secureIntakeUrl: string;
};

export const followUpEmailSubject = "Fijn dat we hebben kennisgemaakt";

export function createKennismakingFollowUpEmail({
  firstName,
  secureIntakeUrl,
}: FollowUpEmailInput) {
  if (!secureIntakeUrl.startsWith("https://")) {
    throw new Error("Gebruik alleen een unieke intake-link via HTTPS.");
  }

  return `Hoi ${firstName},

Bedankt voor ons gesprek. Ik ben benieuwd hoe jij de kennismaking hebt ervaren.

Denk je dat je verder wilt met een intake? Dan kun je via de veilige link hieronder de volgende stap zetten:

${secureIntakeUrl}

Neem rustig de tijd om het formulier in te vullen. Deel alleen informatie die relevant is voor je coachvraag. Na ontvangst neem ik binnen twee werkdagen contact met je op om de intake af te stemmen.

Twijfel je nog? Dan hoef je nu niets te beslissen. Je kunt ook eerst op deze mail reageren met een vraag.

Met vriendelijke groet,

Milan Rem
ACT Vooruit`;
}

// TODO: automatiseer deze mail pas na inrichting van veilige intake-links,
// gegevensopslag, toegangscontrole en een geconfigureerde maildienst.
