export type ActionLink = {
  href: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle: string;
  asideItems: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  duration: string;
  description: string;
  expectation: string;
};

export type PricingItem = {
  name: string;
  price: string;
  duration: string;
  description: string;
  details: string[];
  featured?: boolean;
};

export type ProgramStep = {
  label: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HomeVisual = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export type SourceLink = {
  title: string;
  href: string;
  description: string;
};

export type SessionExpectation = {
  title: string;
  description: string;
};

export const pageHeroes: Record<string, HeroContent> = {
  home: {
    eyebrow: "ACT coaching",
    title:
      "Voor als je vastloopt in je hoofd, keuzes of patronen.",
    description:
      "Praktische begeleiding met ACT als basis. Voor studenten en young professionals die worstelen met piekeren, vermijden, onzekerheid of prestatiedruk.",
    asideTitle: "Hoe ik werk",
    asideItems: [
      "Gelijkwaardig contact",
      "Nuchter en zorgvuldig",
      "Duidelijke grenzen",
      "Kleine stappen die passen",
    ],
  },
  voorWie: {
    eyebrow: "Voor wie",
    title: "Voor wie is ACT Vooruit bedoeld?",
    description:
      "Voor studenten en young professionals die worstelen met piekeren, vermijden, onzekerheid of prestatiedruk.",
    asideTitle: "Herkenbare twijfels",
    asideItems: [
      "Heb ik een diagnose nodig?",
      "Is dit therapie?",
      "Past dit bij mijn situatie?",
      "Kan ik eerst kennismaken?",
    ],
  },
  werkwijze: {
    eyebrow: "Werkwijze",
    title: "Zo werkt coaching bij ACT Vooruit",
    description:
      "Heldere stappen, een duidelijk traject. We beginnen klein en kijken eerst of coaching past.",
    asideTitle: "Wat je kunt verwachten",
    asideItems: [
      "Gratis kennismaking",
      "Intake als het passend voelt",
      "1-op-1 sessies op locatie",
      "Regelmatig evalueren",
    ],
  },
  tarieven: {
    eyebrow: "Tarieven",
    title: "Tarieven en instappen",
    description:
      "Duidelijk, zonder kleine lettertjes. Je hoeft niet meteen een heel traject vast te leggen.",
    asideTitle: "Instappen",
    asideItems: [
      "Gratis online kennismaking",
      "Studententarief beschikbaar",
      "Losse sessies mogelijk",
      "Zakelijk aanbod op aanvraag",
    ],
  },
  overMij: {
    eyebrow: "Over mij",
    title: "Over mij",
    description:
      "Ik bied begeleiding die praktisch, eerlijk en menselijk voelt, juist omdat ik weet hoe het is om vast te lopen in piekeren, vermijding en prestatiedruk.",
    asideTitle: "Mijn stijl",
    asideItems: [
      "Gelijkwaardig",
      "Oprecht",
      "Praktisch",
      "Duidelijk over grenzen",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen",
    description:
      "Twijfels zijn logisch. Hier vind je antwoorden op de vragen die vaak eerst spelen.",
    asideTitle: "Kort antwoord",
    asideItems: [
      "Geen diagnose nodig",
      "Geen therapie of behandeling",
      "ACT wordt praktisch gebruikt",
      "Online kennismaken, fysiek werken",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact opnemen",
    description:
      "Heb je een vraag of twijfel je of coaching past? Een kort bericht is genoeg om te beginnen.",
    asideTitle: "Praktisch",
    asideItems: [
      "Reageertijd meestal binnen 2 werkdagen",
      "Kennismaking online",
      "Sessies fysiek op locatie",
      "Niet bedoeld voor spoed of crisis",
    ],
  },
  kennismaking: {
    eyebrow: "Gratis kennismaking",
    title: "Plan een gratis kennismaking",
    description:
      "Een kort en vrijblijvend gesprek om te kijken of coaching later kan passen. ACT Vooruit is nog in voorbereiding en je hoeft niets zeker te weten.",
    asideTitle: "In het kort",
    asideItems: [
      "Online",
      "25 minuten",
      "Vrijblijvend",
      "ACT Vooruit is in voorbereiding",
    ],
  },
  veiligheid: {
    eyebrow: "Veiligheid & grenzen",
    title: "Coaching is niet altijd de juiste eerste stap.",
    description:
      "Duidelijke grenzen zijn belangrijk. Ze helpen om zorgvuldig te kijken naar wat jij nodig hebt.",
    asideTitle: "De lijn blijft helder",
    asideItems: [
      "Geen behandeling of diagnostiek",
      "Eerlijk bij twijfel over passendheid",
      "Doorverwijzen als dat nodig is",
      "Veiligheid vóór snelheid",
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Zorgvuldig omgaan met contactgegevens en berichten.",
    description:
      "Deze website verzamelt zo min mogelijk gegevens. Contactinformatie wordt alleen gebruikt om op je vraag te reageren of om een eerste gesprek af te stemmen.",
    asideTitle: "In het kort",
    asideItems: [
      "Geen account of dashboard",
      "Alleen noodzakelijke contactgegevens",
      "Geen zware trackingstack",
      "Vragen? Neem gerust contact op",
    ],
  },
  disclaimer: {
    eyebrow: "Disclaimer",
    title: "Heldere afbakening over wat ACT Vooruit wel en niet biedt.",
    description:
      "De website en coaching zijn bedoeld als praktische, laagdrempelige begeleiding. Ze vervangen geen behandeling, diagnostiek of hulp bij acute crisis.",
    asideTitle: "Belangrijk",
    asideItems: [
      "Geen therapie of behandeling",
      "Geen crisis- of spoedhulp",
      "Geen medische claims",
      "Wel eerlijke begeleiding en afstemming",
    ],
  },
};

export const positioningCards = [
  {
    title: "Voor studenten en young professionals",
    description:
      "Voor als studie, werk, keuzes of verwachtingen groter voelen dan je aan de buitenkant laat zien.",
  },
  {
    title: "ACT zonder zweverigheid",
    description:
      "We kijken naar gedachten, gevoelens en gedrag, maar altijd gekoppeld aan je gewone leven.",
  },
  {
    title: "Eerlijk en realistisch",
    description:
      "Als coaching niet past, zeg ik dat. Als het wel past, maken we het klein en haalbaar.",
  },
];

export const homeVisuals: HomeVisual[] = [
  {
    title: "Je hoofd staat altijd aan",
    description: "Je blijft nadenken, twijfelen of analyseren, ook als je rust nodig hebt.",
    image: "/images/session-notes.svg",
    href: "/voor-wie",
  },
  {
    title: "Uitstellen geeft even lucht",
    description: "Je schuift dingen voor je uit, maar de druk wordt daarna groter.",
    image: "/images/home-pattern-map.svg",
    href: "/voor-wie",
  },
  {
    title: "Je wilt graag verandering",
    description: "Je weet niet waar en of je hulp moet zoeken.",
    image: "/images/home-hero-photo.svg",
    href: "/werkwijze",
  },
];

export const painPoints = [
  "Veel piekeren of overdenken",
  "Uitstellen of vermijden",
  "Moeite met keuzes maken",
  "Prestatiedruk",
  "Spanning en onrust",
  "Weinig rust in je hoofd",
  "Onzekerheid",
  "Vastlopen in studie of werk",
];

export const whatActIs = [
  "Je herkent wat je in de weg zit: piekeren, vermijden, uitstellen of perfectionisme.",
  "Je leert omgaan met lastige gevoelens en gedachten, zodat je meer rust ervaart in je dagelijks leven.",
  "Je zet kleine stappen richting wat jij belangrijk vindt in studie, werk of dagelijks leven.",
];

export const whatActIsNot = [
  "Geen therapie, behandeling of diagnostiek.",
  "Geen vage beloftes of snelle fix.",
  "Geen traject zonder duidelijk doel.",
];

export const whyKennismaking = [
  {
    title: "Vrijblijvend",
    description:
      "Een kennismaking is bedoeld om rustig te verkennen of coaching past. Je hoeft nog niets te beslissen.",
  },
  {
    title: "Duidelijk",
    description:
      "Je hoort hoe de werkwijze eruitziet en krijgt ruimte om kort te vertellen wat er speelt.",
  },
  {
    title: "Zorgvuldig",
    description:
      "Als coaching niet passend is, wordt dat eerlijk besproken en kijken we wat logischer is.",
  },
];

export const doelgroepSituaties = [
  {
    title: "Studie en keuzes",
    description:
      "Opdrachten, deadlines of studiekeuzes blijven in je hoofd hangen. Je weet ergens wel wat je moet doen, maar je komt niet tot actie.",
  },
  {
    title: "Werk en druk",
    description:
      "Je wilt het goed doen op je stage, bijbaan of werk. Tegelijk kosten spanning, twijfel of perfectionisme steeds meer energie.",
  },
  {
    title: "Dagelijks leven",
    description:
      "Je hoofd staat vaak aan, en je komt niet meer toe aan rust, sociaal contact of andere dingen.",
  },
];

export const supportSources: SourceLink[] = [
  {
    title: "RIVM en Trimbos monitoren studentenwelzijn",
    href: "https://www.rivm.nl/publicaties/monitor-mentale-gezondheid-en-middelengebruik-studenten-hbo-en-wo-2025",
    description:
      "Veel studenten herkennen stress, prestatiedruk, eenzaamheid of angst- en somberheidsgevoelens. Dat betekent niet dat je meteen een zwaar traject nodig hebt, maar wel dat je het serieus mag nemen.",
  },
  {
    title: "Jongeren ervaren vaak stress",
    href: "https://www.rivm.nl/gezondheidsonderzoek-covid-19/kwartaalonderzoek-jongeren/resultaten-eerdere-metingen/meting-15-mentale-gezondheid",
    description:
      "Veel studenten en young professionals voelen zich vaak gestrest. Je bent dus niet de enige als je merkt dat druk, twijfel of onrust veel ruimte innemen.",
  },
];

export const fitCriteria = [
  "Je hebt geen crisis, maar merkt wel dat je vastloopt.",
  "Je hebt genoeg ruimte om met coaching aan de slag te gaan.",
  "Je wilt patronen herkennen en oefenen met kleine stappen.",
  "Je zoekt een eerste stap zonder meteen een behandeltraject.",
];

export const notFitCriteria = [
  "Er is sprake van acute crisis of onveiligheid.",
  "Je hebt nu intensieve behandeling nodig.",
  "Trauma, verslaving of ernstige ontregeling staat op de voorgrond.",
  "Er is sprake van psychose, hallucinaties of concrete zelfbeschadiging.",
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Gratis kennismaking",
    duration: "25 minuten",
    description:
      "Een eerste online gesprek om te verkennen waar je in vastloopt, wat je zoekt en of ACT Vooruit daarbij past.",
    expectation:
      "Vrijblijvend, kort en zonder verplichting om door te gaan.",
  },
  {
    step: "2",
    title: "Intake",
    duration: "60 minuten",
    description:
      "In de intake maken we je hulpvraag concreet door te kijken naar je huidige situatie en je verwachtingen.",
    expectation:
      "Daarna bepalen we samen waar we praktisch mee aan de slag gaan.",
  },
  {
    step: "3",
    title: "Sessies",
    duration: "60 minuten per sessie",
    description:
      "Je werkt aan inzicht, omgaan met lastige gedachten en gevoelens, en stappen richting wat belangrijk voor je is.",
    expectation:
      "We houden het concreet en koppelen steeds terug naar jouw dagelijks leven.",
  },
  {
    step: "4",
    title: "Evaluatie",
    duration: "kort evaluatiemoment of losse eindsessie",
    description:
      "We kijken regelmatig of het nog past, wat werkt en of er aanpassingen nodig zijn.",
    expectation:
      "Zo blijft coaching overzichtelijk en doelgericht.",
  },
];

export const actPrinciples = [
  {
    title: "Gedachten niet alles laten bepalen",
    description:
      "Als piekeren of twijfels jou belemmeren, oefenen we samen anders te reageren.",
  },
  {
    title: "Patronen leren herkennen",
    description:
      "We kijken concreet naar jouw gedrag.",
  },
  {
    title: "Stappen richting wat belangrijk is",
    description:
      "Wat zijn jouw doelen en waarden?",
  },
];

export const sessionExpectations: SessionExpectation[] = [
  {
    title: "Spiegelen",
    description: "samen helder krijgen wat er speelt",
  },
  {
    title: "Structureren",
    description: "samen creëren we meer overzicht",
  },
  {
    title: "Oefenen",
    description: "gedragsverandering in kleine stappen",
  },
  {
    title: "Evalueren",
    description: "kort kijken wat werkt en wat bijstelling vraagt",
  },
];

export const pricingItems: PricingItem[] = [
  {
    name: "Gratis kennismaking",
    price: "Gratis",
    duration: "25 minuten, online",
    description:
      "Een online gesprek om kort kennis te maken en te kijken of coaching passend voelt.",
    details: [
      "Vrijblijvend",
      "Online",
      "Geen verplicht vervolg",
    ],
    featured: true,
  },
  {
    name: "Intake",
    price: "€65 regulier / €45 student",
    duration: "60 minuten, op locatie",
    description:
      "Een fysiek gesprek waarin we jouw vraag, patronen, doelen en grenzen helder krijgen.",
    details: [
      "Coachvraag verhelderen",
      "Doelen en waarden",
      "Passend vervolg bepalen",
    ],
  },
  {
    name: "Losse sessie",
    price: "€85 regulier / €59 student",
    duration: "60 minuten, op locatie",
    description:
      "Een fysieke 1-op-1 sessie om concreet te werken aan patronen, keuzes en stappen.",
    details: [
      "ACT-based coaching",
      "Praktisch oefenen",
      "Per sessie te evalueren",
    ],
  },
  {
    name: "Zakelijk aanbod op aanvraag",
    price: "Op aanvraag",
    duration: "Afhankelijk van vraag",
    description:
      "Op aanvraag voor organisaties, onderwijsinstellingen of werkgevers.",
    details: [
      "Maatwerk",
      "Heldere afbakening",
      "Contact voor voorstel",
    ],
  },
];

export const pricingNotes = [
  "ACT Vooruit wil betaalbare hulp bieden voor studenten en young professionals.",
  "Daarom is ACT Vooruit ingericht als een betaalbare en laagdrempelige eerste stap voor studenten en young professionals die studeren of net zijn gestart met werken.",
  "Je begint klein: eerst een gratis online kennismaking, daarna pas een mogelijke intake.",
  "Je betaalt voorlopig per intake of losse sessie en hoeft geen trajectpakket te kopen.",
];

export const aboutIntro = [
  "ACT Vooruit is voor mij niet alleen professioneel, maar ook persoonlijk. Ik weet uit eigen ervaring hoe lastig het kan zijn als piekeren, vermijden en druk te veel ruimte innemen.",
  "Juist daarom wil ik begeleiding bieden die laagdrempelig, duidelijk en bruikbaar is. Niet zwaarder maken dan nodig, maar ook niet doen alsof het vanzelf overgaat.",
];

export const aboutStory = [
  "Ik herken hoe het kan zijn als piekeren, vermijden, druk, angstgevoelens, stress, paniek of somberheid veel ruimte innemen. Niet als mooi verhaal achteraf, maar als iets dat in het dagelijks leven heel concreet kan doorwerken.",
  "ACT, voluit Acceptance and Commitment Therapy, heeft mij veel geholpen. Niet omdat moeilijke gedachten of gevoelens ineens verdwijnen, maar omdat je anders kunt leren reageren op lastige situaties, gevoelens en gedachten.",
  "Ook middelengebruik mag bespreekbaar zijn. Onder studenten en young professionals wordt gebruik soms genormaliseerd of weinig besproken, terwijl het wel invloed kan hebben op hoe je je voelt en functioneert. Ik kijk daar niet moraliserend naar, maar wel eerlijk en zorgvuldig.",
  "Ik zie mezelf als sparringspartner. Ik help je om samen jouw oplossingen te vinden.",
];

export const educationAndExperience = [
  {
    title: "ACT-cursus",
    status: "In opleiding",
    description:
      "Ik volg momenteel een ACT-cursus bij ACT in Actie - Cursus & Opleiding. Ik wil deze cursus afronden voordat ACT Vooruit daadwerkelijk van start gaat.",
  },
  {
    title: "Studentcoaching aan de HAN",
    status: "Ervaring tijdens mijn minor",
    description:
      "Tijdens mijn minor aan de HAN begeleidde ik als studentcoach twee studenten met een concrete coachvraag. Daarbij deed ik ervaring op met gesprekken over studie, prestatiedruk, onzekerheid, uitstelgedrag en mentale belasting.",
  },
  {
    title: "Blijven reflecteren",
    status: "Voornemen bij de start",
    description:
      "Bij de start van mijn praktijk wil ik reflectie, intervisie en waar passend supervisie een vaste plek geven. Ik vind het belangrijk om alleen opleidingen en ervaring te vermelden die ik daadwerkelijk heb gevolgd of opgebouwd.",
  },
] as const;

export const aboutValues = [
  {
    title: "Gelijkwaardig contact",
    description:
      "Geen afstandelijke expertrol, maar een sparringspartner die met je meedenkt en eerlijk terugkoppelt.",
  },
  {
    title: "Oprecht en praktisch",
    description:
      "We vertalen inzichten naar kleine stappen die bruikbaar zijn in je studie, werk en dagelijks leven.",
  },
  {
    title: "Zorgvuldige grenzen",
    description:
      "Als jouw vraag beter past bij behandeling of andere hulp, benoem ik dat duidelijk en denk ik mee over een vervolgstap.",
  },
];

export const aboutExpectations = [
  "Duidelijke gesprekken zonder wollige taal.",
  "Ruimte voor twijfel, tempo en eerlijke vragen.",
  "Steeds terug naar studie, werk en dagelijks leven.",
  "Menselijk contact, met praktische richting.",
];

export const kennismakingIncluded = [
  "Kort verkennen waar je in vastloopt.",
  "Kijken wat je zoekt in begeleiding.",
  "Bespreken of coaching passend is.",
  "Ruimte voor vragen over werkwijze, tarieven en locatie.",
];

export const kennismakingNotIncluded = [
  "Je hoeft geen diagnose te hebben.",
  "Je hoeft nog geen volledig verhaal klaar te hebben.",
  "Je hoeft niet meteen te besluiten om door te gaan.",
];

export const kennismakingSteps = [
  {
    title: "Eerst rustig landen",
    description:
      "We nemen kort door wat je vraag is en wat je spannend of belangrijk vindt in het contact.",
  },
  {
    title: "Samen afstemmen",
    description:
      "Ik leg uit hoe ik werk en jij kunt aangeven waar je behoefte aan hebt of juist over twijfelt.",
  },
  {
    title: "Helder afronden",
    description:
      "Na afloop weet je beter of coaching een logische vervolgstap is, of dat iets anders passender voelt.",
  },
];

export const referralSupport = [
  {
    title: "Eerlijk benoemen",
    description:
      "Als ik denk dat coaching nu niet passend of veilig genoeg is, zeg ik dat duidelijk en respectvol.",
  },
  {
    title: "Meedenken over vervolg",
    description:
      "Ik denk met je mee over welke vorm van hulp passend is.",
  },
  {
    title: "Het juiste tempo",
    description:
      "We nemen de tijd om te bekijken welke stappen er nodig zijn.",
  },
];

export const programSteps: ProgramStep[] = [
  {
    label: "Start",
    title: "Gratis online kennismaking",
    description:
      "Kort aftasten of jouw vraag past bij coaching en of de manier van werken goed voelt.",
  },
  {
    label: "Intake",
    title: "Vraag, doelen en context",
    description:
      "We brengen in kaart waar je in vastloopt, wat je wilt bereiken en welke patronen nu meespelen.",
  },
  {
    label: "Sessie 1",
    title: "Doelen, waarden en huidige patronen",
    description:
      "We maken scherper wat voor jou belangrijk is en hoe piekeren, vermijden of druk je nu vastzet.",
  },
  {
    label: "Sessie 2 t/m 6",
    title: "Werksessies",
    description:
      "We gaan concreet aan de slag met ACT-oefeningen, reflectie en stappen in je dagelijks leven.",
  },
  {
    label: "Sessie 7",
    title: "Toepassen en verstevigen",
    description:
      "We kijken wat werkt, wat nog kwetsbaar is en hoe je dit buiten de sessies blijft toepassen.",
  },
  {
    label: "Sessie 8",
    title: "Afronding en evaluatie",
    description:
      "We ronden zorgvuldig af, evalueren je ontwikkeling en bespreken wat helpt om verder te gaan.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Moet ik een diagnose hebben?",
    answer:
      "Nee. Je hoeft geen diagnose te hebben. Vaak begint het juist met merken dat je vastloopt en wilt onderzoeken wat een logische eerste stap is.",
  },
  {
    question: "Is dit therapie?",
    answer:
      "Nee. ACT Vooruit biedt coaching, geen therapie, behandeling of diagnostiek. Als jouw hulpvraag beter past bij behandeling, help ik bij het vinden van de juiste hulp.",
  },
  {
    question: "Is ACT zweverig?",
    answer:
      "Niet zoals ik het gebruik. ACT is hier praktisch: patronen herkennen, oefenen met wat lastig is en stappen zetten richting wat belangrijk voor je is.",
  },
  {
    question: "Werk je online of fysiek?",
    answer:
      "De gratis kennismaking is online. De intake en vervolgsessies zijn fysiek op locatie in regio Nijmegen.",
  },
  {
    question: "Is er een wachtlijst?",
    answer:
      "ACT Vooruit is nog in voorbereiding. Zodra de praktijk start, staat de actuele beschikbaarheid in de kennismakingsagenda.",
  },
  {
    question: "Past dit bij mijn levensfase?",
    answer:
      "ACT Vooruit richt zich juist op studenten en young professionals. Studie, keuzes, eerste werkjaren en prestatiedruk kunnen veel vragen.",
  },
  {
    question: "Moet ik meteen een traject kopen?",
    answer:
      "Nee. Je start met een gratis kennismaking. Daarna kun je rustig kijken of een intake of vervolgsessies passend zijn.",
  },
  {
    question: "Wat bespreken we in een kennismaking?",
    answer:
      "We bespreken kort waar je in vastloopt, wat je zoekt en hoe coaching werkt. Je hoeft je verhaal nog niet perfect klaar te hebben.",
  },
  {
    question: "Wanneer verwijs je door?",
    answer:
      "Bij acute crisis, onveiligheid, ernstige ontregeling, psychose, verslaving of trauma op de voorgrond is andere hulp eerst logischer.",
  },
  {
    question: "Kan coaching naast een psycholoog of behandeling?",
    answer:
      "Soms wel, als de rolverdeling helder is en je coachvraag concreet en veilig blijft. Bij twijfel bespreken we dat zorgvuldig.",
  },
  {
    question: "Wat kost het?",
    answer:
      "De kennismaking is gratis. De intake en sessies hebben een regulier tarief en studententarief. Je vindt de bedragen op de tarievenpagina.",
  },
  {
    question: "Wat gebeurt er in de intake?",
    answer:
      "In de intake brengen we je vraag, situatie en doelen scherper in kaart. Daarna bepalen we waar we praktisch aan werken.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "ACT Vooruit is nog niet officieel gestart. Zodra de praktijk opent, begint dit met een gratis kennismaking en kijken we daarna wat haalbaar en passend is.",
  },
];
