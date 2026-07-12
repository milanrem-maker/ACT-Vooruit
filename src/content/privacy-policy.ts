export const privacyPolicy = {
  lastUpdated: "juli 2026",
  retention: {
    contact:
      "maximaal zes maanden na de laatste inhoudelijke afhandeling",
    booking:
      "maximaal zes maanden na het laatste contact als je niet verdergaat",
    coaching:
      "maximaal twee jaar na het einde van het coachtraject, tenzij eerder verwijderen passend is of langer bewaren juridisch nodig is",
    financial: "zeven jaar",
    technical:
      "zo kort mogelijk en volgens de actieve instellingen van de leverancier",
  },
  providers: [
    {
      name: "Vercel",
      purpose:
        "host de website en kan beperkte technische verzoek- en beveiligingsgegevens verwerken.",
      privacyUrl: "https://vercel.com/legal/privacy-notice",
    },
    {
      name: "Cal.com",
      purpose:
        "verwerkt de gegevens die nodig zijn om een kennismaking te plannen.",
      privacyUrl: "https://cal.com/privacy",
    },
    {
      name: "Google Gmail",
      purpose:
        "wordt gebruikt voor e-mail en praktische correspondentie.",
      privacyUrl: "https://policies.google.com/privacy",
    },
  ],
} as const;
