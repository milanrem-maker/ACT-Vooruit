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
  region: "regio Nijmegen",
  responseTime: "meestal binnen 2 werkdagen",
  timezone: "Europe/Amsterdam",
  coach: {
    name: "Milan Rem",
    title: "Coach en oprichter",
  },
  contact: {
    email: "milan.rem@gmail.com",
    phone: "",
    location: "regio Nijmegen",
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
      "Kies een beschikbaar moment. Na het plannen ontvang je een bevestiging per e-mail.",
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
  launch: {
    status: "In voorbereiding",
    description:
      "ACT Vooruit wordt zorgvuldig voorbereid en is nog niet officieel gestart.",
  },
  emergencyNotice:
    "Bij acute onveiligheid of crisis is coaching niet passend. Neem dan direct contact op met 112 of met je huisarts/huisartsenpost.",
} as const;
