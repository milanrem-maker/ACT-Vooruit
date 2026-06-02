export const publicRoutes = [
  "/",
  "/voor-wie",
  "/werkwijze",
  "/tarieven",
  "/over-mij",
  "/blog",
  "/faq",
  "/contact",
  "/gratis-kennismaking",
  "/veiligheid-of-grenzen",
  "/privacy",
  "/disclaimer",
] as const;

const calBookingUrl =
  process.env.NEXT_PUBLIC_CAL_BOOKING_URL ||
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  "https://cal.com/milan-rem-nshlib/kennismakingsgesprek-act-vooruit";

export const siteConfig = {
  name: "ACT Vooruit",
  tagline: "Milan Rem",
  shortDescription:
    "Praktische ACT-based coaching bij piekeren, uitstellen en prestatiedruk.",
  description:
    "ACT-based coaching voor studenten en young professionals die vastlopen in piekeren, vermijden, keuzestress, onzekerheid of prestatiedruk. Geen therapie of diagnose, wel praktische begeleiding om overzicht te krijgen en stap voor stap weer in beweging te komen.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.actvooruit.nl",
  locale: "nl_NL",
  region: "Regio Nijmegen, fysiek op locatie",
  responseTime: "meestal binnen 2 werkdagen",
  timezone: "Europe/Amsterdam",
  coach: {
    name: "Milan Rem",
    title: "ACT coach",
  },
  contact: {
    email: "milan.rem@gmail.com",
    phone: "",
    location: "Nijmegen, fysiek op locatie",
    responseTime: "meestal binnen 2 werkdagen",
  },
  ctas: {
    kennismakingPage: "/gratis-kennismaking",
    booking: "/gratis-kennismaking",
    contact: "/contact#contactformulier",
    werkwijze: "/werkwijze",
  },
  booking: {
    calComUrl: calBookingUrl,
    sessionLabel: "Gratis kennismaking",
    duration: "25 minuten",
    location: "Online kennismakingsgesprek",
    leadTime: "Je ontvangt daarna een bevestiging per mail.",
    availabilityNote:
      "De gratis kennismaking is online. Vervolgsessies vinden fysiek op locatie plaats. Zolang de live agenda nog niet gekoppeld is, bevestig ik het gekozen moment nog per mail.",
    slots: [
      {
        date: "Dinsdag 26 mei",
        isoDate: "2026-05-26",
        slots: [
          { id: "2026-05-26T09:00", label: "09:00" },
          { id: "2026-05-26T11:00", label: "11:00" },
          { id: "2026-05-26T15:30", label: "15:30" },
        ],
      },
      {
        date: "Donderdag 28 mei",
        isoDate: "2026-05-28",
        slots: [
          { id: "2026-05-28T10:00", label: "10:00" },
          { id: "2026-05-28T13:30", label: "13:30" },
          { id: "2026-05-28T16:00", label: "16:00" },
        ],
      },
      {
        date: "Maandag 1 juni",
        isoDate: "2026-06-01",
        slots: [
          { id: "2026-06-01T09:30", label: "09:30" },
          { id: "2026-06-01T12:00", label: "12:00" },
          { id: "2026-06-01T17:00", label: "17:00" },
        ],
      },
    ],
  },
  navigation: [
    { href: "/voor-wie", label: "Voor wie" },
    { href: "/werkwijze", label: "Werkwijze" },
    { href: "/tarieven", label: "Tarieven" },
    { href: "/over-mij", label: "Over mij" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  footerNavigation: [
    { href: "/gratis-kennismaking", label: "Gratis kennismaking" },
    { href: "/veiligheid-of-grenzen", label: "Veiligheid & grenzen" },
    { href: "/privacy", label: "Privacy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
  socials: {
    linkedin: "",
    instagram: "",
  },
  seo: {
    defaultTitle:
      "ACT Vooruit | ACT coaching bij piekeren en prestatiedruk",
    defaultDescription:
      "ACT coaching voor studenten en young professionals die vastlopen in piekeren, vermijden, onzekerheid, keuzedruk of prestatiedruk. Gelijkwaardig, praktisch en fysiek op locatie in regio Nijmegen.",
    keywords: [
      "ACT coaching",
      "ACT coach Nijmegen",
      "studenten coaching",
      "studentencoach Nijmegen",
      "young professionals coaching",
      "piekeren",
      "uitstellen",
      "vermijding",
      "onzekerheid",
      "keuzestress",
      "prestatiedruk",
      "studentencoach",
      "Nijmegen",
    ],
  },
  trustBadges: [
    "Gratis kennismaking",
    "Geen diagnose nodig",
    "Geen therapie",
    "Fysieke sessies op locatie",
  ],
  emergencyNotice:
    "Bij acute onveiligheid of crisis is coaching niet passend. Neem dan direct contact op met 112 of met je huisarts/huisartsenpost.",
} as const;
