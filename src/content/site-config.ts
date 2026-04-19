export const publicRoutes = [
  "/",
  "/voor-wie",
  "/werkwijze",
  "/tarieven",
  "/over-mij",
  "/faq",
  "/contact",
  "/gratis-kennismaking",
  "/veiligheid-of-grenzen",
  "/privacy",
  "/disclaimer",
] as const;

export const siteConfig = {
  name: "ACT Vooruit",
  shortDescription: "ACT-based coaching voor studenten en young professionals.",
  description:
    "ACT-based coaching voor studenten en young professionals die vastlopen in piekeren, vermijding en onzekerheid. Geen therapie of diagnostiek, maar een praktische en laagdrempelige eerste stap richting meer rust, richting en beweging.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.actvooruit.nl",
  locale: "nl_NL",
  region: "Regio Nijmegen en online",
  responseTime: "meestal binnen 2 werkdagen",
  coach: {
    name: "Jouw naam",
    title: "ACT-based coach",
  },
  contact: {
    email: "hallo@actvooruit.nl",
    phone: "",
    location: "Nijmegen en online",
    responseTime: "meestal binnen 2 werkdagen",
  },
  ctas: {
    kennismakingPage: "/gratis-kennismaking",
    booking: process.env.NEXT_PUBLIC_BOOKING_URL || "/contact",
    contact: "/contact",
    werkwijze: "/werkwijze",
  },
  navigation: [
    { href: "/voor-wie", label: "Voor wie" },
    { href: "/werkwijze", label: "Werkwijze" },
    { href: "/tarieven", label: "Tarieven" },
    { href: "/over-mij", label: "Over mij" },
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
      "ACT Vooruit | ACT-based coaching voor studenten en young professionals",
    defaultDescription:
      "Laagdrempelige ACT-based coaching voor studenten en young professionals die vastlopen in piekeren, vermijding, onzekerheid en prestatiedruk. Regio Nijmegen en online.",
    keywords: [
      "ACT coaching",
      "studenten coaching",
      "young professionals coaching",
      "piekeren",
      "vermijding",
      "onzekerheid",
      "prestatiedruk",
      "Nijmegen",
    ],
  },
  trustBadges: [
    "Geen therapie, behandeling of diagnostiek",
    "Praktische ACT-based coaching",
    "Voor studenten en young professionals",
    "Online en in regio Nijmegen",
  ],
  emergencyNotice:
    "Bij acute onveiligheid of crisis is coaching niet passend. Neem dan direct contact op met 112 of met je huisarts/huisartsenpost.",
} as const;
