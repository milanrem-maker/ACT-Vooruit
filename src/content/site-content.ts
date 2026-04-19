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

export type FaqItem = {
  question: string;
  answer: string;
};

export const pageHeroes: Record<string, HeroContent> = {
  home: {
    eyebrow: "ACT-based coaching",
    title:
      "Voor studenten en young professionals die vastlopen in piekeren, vermijding en onzekerheid.",
    description:
      "Geen therapie of diagnostiek, maar een praktische en laagdrempelige eerste stap om meer rust in je hoofd te ervaren en weer in beweging te komen.",
    asideTitle: "Helder vanaf het begin",
    asideItems: [
      "Laagdrempelig en praktisch",
      "Gelijkwaardig en veilig",
      "ACT als basis, zonder zweverigheid",
      "Gratis kennismaking als eerste stap",
    ],
  },
  voorWie: {
    eyebrow: "Voor wie",
    title: "Voor mensen die merken dat ze vastlopen, maar niet altijd weten welke hulp past.",
    description:
      "ACT Vooruit richt zich op studenten en young professionals die veel piekeren, vermijden of twijfelen, en die een veilige en praktische eerste stap zoeken.",
    asideTitle: "Herkenbare twijfels",
    asideItems: [
      "‘Zo erg is het toch niet?’",
      "‘Misschien moet ik dit gewoon zelf oplossen.’",
      "‘Ik weet niet of ik therapie nodig heb.’",
      "‘Ik wil eerst rustig verkennen wat past.’",
    ],
  },
  werkwijze: {
    eyebrow: "Werkwijze",
    title: "Een duidelijk proces, zonder druk om meteen een groot traject te starten.",
    description:
      "We beginnen klein en helder: eerst kennismaken, daarna samen bekijken wat passend is. Praktische begeleiding en veiligheid staan steeds voorop.",
    asideTitle: "Wat je kunt verwachten",
    asideItems: [
      "Concrete stappen",
      "Ruimte om vragen te stellen",
      "Eerlijke afbakening",
      "Regelmatige evaluatie",
    ],
  },
  tarieven: {
    eyebrow: "Tarieven",
    title: "Transparant, rustig en zonder verkooppraat.",
    description:
      "Je hoeft niet meteen een volledig traject vast te leggen. Eerst kennismaken kan altijd vrijblijvend, zodat je rustig kunt voelen of dit past.",
    asideTitle: "Belangrijk om te weten",
    asideItems: [
      "Kennismaking is gratis",
      "Geen verplicht traject",
      "Studentvriendelijke opties mogelijk",
      "Heldere prijzen zonder verrassingen",
    ],
  },
  overMij: {
    eyebrow: "Over mij",
    title: "Menselijke, praktische begeleiding met oog voor grenzen.",
    description:
      "Ik werk vanuit betrokkenheid, structuur en ACT als basis. Niet als behandelaar, maar als sparringspartner die helpt om patronen helder te krijgen en stap voor stap verder te komen.",
    asideTitle: "Waar ik op let",
    asideItems: [
      "Rust en duidelijkheid",
      "Laagdrempelig contact",
      "Passendheid en veiligheid",
      "Doen wat voor jou belangrijk is",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vragen die vaak spelen voordat iemand een eerste stap zet.",
    description:
      "Juist als je twijfelt of coaching passend is, helpt het om helder te weten wat je wel en niet kunt verwachten.",
    asideTitle: "Veelvoorkomende thema's",
    asideItems: [
      "Diagnose of geen diagnose",
      "Coaching versus therapie",
      "Kosten en trajectvorm",
      "Online of fysiek",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Oriënterend contact is welkom, ook als je nog niet precies weet wat je nodig hebt.",
    description:
      "Je mag laagdrempelig contact opnemen met een vraag, twijfel of verzoek voor een gratis kennismakingsgesprek. Ik denk graag met je mee over een passende eerste stap.",
    asideTitle: "Praktisch",
    asideItems: [
      "Reageertijd meestal binnen 2 werkdagen",
      "Mail of eerste gesprek mogelijk",
      "Online en regio Nijmegen",
      "Niet bedoeld voor spoed of crisis",
    ],
  },
  kennismaking: {
    eyebrow: "Gratis kennismaking",
    title: "Een rustige eerste stap om te kijken of coaching op dit moment passend is.",
    description:
      "In een gratis kennismaking verkennen we kort je vraag, je situatie en of ACT Vooruit een goede match is. Veiligheid en passendheid zijn daarbij altijd leidend.",
    asideTitle: "Waarvoor dit gesprek bedoeld is",
    asideItems: [
      "Even landen en je vraag verkennen",
      "Uitleg krijgen over de werkwijze",
      "Kijken of coaching past",
      "Ruimte voor vragen en twijfel",
    ],
  },
  veiligheid: {
    eyebrow: "Veiligheid & grenzen",
    title: "Coaching is niet in elke situatie de juiste eerste stap.",
    description:
      "Juist daarom is het belangrijk om helder te zijn over wanneer ACT-based coaching passend kan zijn, en wanneer andere hulp logischer of veiliger is.",
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
      "Voor mensen die veel nadenken, uitstellen of vastlopen in keuzes, studie, werk of sociale druk.",
  },
  {
    title: "ACT als praktische basis",
    description:
      "Geen zware theorie, maar oefenen met wat je denkt, voelt en belangrijk vindt in het dagelijks leven.",
  },
  {
    title: "Rustige eerste stap",
    description:
      "Eerst kennismaken, dan pas samen beslissen of coaching nu passend en helpend is.",
  },
];

export const painPoints = [
  "Je piekert veel en blijft daardoor hangen in dezelfde gedachten.",
  "Je stelt belangrijke dingen uit omdat het te groot of te spannend voelt.",
  "Je vermijdt gesprekken, keuzes of situaties waar je tegenop ziet.",
  "Je voelt veel prestatiedruk rondom studie, werk of verwachtingen van anderen.",
  "Je twijfelt voortdurend aan jezelf en weet niet goed waar je moet beginnen.",
  "Je wilt wel vooruit, maar je hoofd en gedrag werken niet altijd mee.",
];

export const whatActIs = [
  "Een praktische vorm van coaching die helpt om patronen te herkennen en ermee te oefenen.",
  "Een manier om anders om te gaan met lastige gedachten en gevoelens, zonder ze eerst helemaal weg te hoeven krijgen.",
  "Begeleiding richting kleine, haalbare stappen die passen bij wat voor jou belangrijk is.",
];

export const whatActIsNot = [
  "Geen therapie, behandeling of diagnostiek.",
  "Geen snelle fix of traject waarin je meteen alles moet weten of kunnen.",
  "Geen zweverige aanpak, maar een concrete manier van kijken, oefenen en evalueren.",
];

export const whyKennismaking = [
  {
    title: "Je hoeft het nog niet zeker te weten",
    description:
      "Juist als je twijfelt of coaching bij je past, is een korte en vrijblijvende kennismaking vaak een fijne eerste stap.",
  },
  {
    title: "We bekijken samen de match",
    description:
      "Je krijgt ruimte om je vraag te delen en ik leg uit hoe ik werk, zodat je beter kunt inschatten of dit bij je past.",
  },
  {
    title: "Veiligheid blijft leidend",
    description:
      "Als coaching nu niet de juiste route lijkt, bespreek ik dat eerlijk met je en denk ik mee over wat logischer is.",
  },
];

export const doelgroepSituaties = [
  {
    title: "Studie en keuzes",
    description:
      "Je schuift opdrachten of keuzes voor je uit, omdat je bang bent om de verkeerde richting te kiezen of te falen.",
  },
  {
    title: "Werk en druk",
    description:
      "Je wilt het goed doen op werk, maar merkt dat spanning, twijfel of perfectionisme steeds meer ruimte innemen.",
  },
  {
    title: "Dagelijks leven",
    description:
      "Je hoofd staat vaak aan. Daardoor kom je minder toe aan rust, contact, herstel of de dingen die je belangrijk vindt.",
  },
];

export const fitCriteria = [
  "Je hebt een duidelijke coachvraag of merkt dat je op een concreet thema vastloopt.",
  "Je functioneert voldoende in je dagelijks leven om afspraken te maken en ermee te oefenen.",
  "Je zoekt praktische begeleiding en staat open voor kleine stappen tussen sessies door.",
  "Je begrijpt dat coaching iets anders is dan behandeling of diagnostiek.",
];

export const notFitCriteria = [
  "Er is sprake van suïcidaliteit of concrete zelfbeschadiging.",
  "Je zit in een acute crisis of ervaart ernstige ontregeling.",
  "Psychose, hallucinaties of trauma staan sterk op de voorgrond.",
  "Verslaving of agressieproblematiek vraagt nu eerst om andere hulp.",
];

export const processSteps: ProcessStep[] = [
  {
    step: "1",
    title: "Gratis kennismaking",
    duration: "20 tot 30 minuten",
    description:
      "We verkennen kort je vraag, waar je in vastloopt en wat je zoekt in begeleiding.",
    expectation:
      "Je krijgt helderheid over mijn werkwijze en we kijken samen of coaching op dit moment passend lijkt.",
  },
  {
    step: "2",
    title: "Intake",
    duration: "60 minuten",
    description:
      "Als het passend voelt, brengen we je hulpvraag, context, patronen en doelen rustiger in kaart.",
    expectation:
      "Je krijgt meer structuur in wat er speelt en we spreken af waar we praktisch mee aan de slag gaan.",
  },
  {
    step: "3",
    title: "1-op-1 sessies",
    duration: "45 tot 60 minuten per sessie",
    description:
      "In de sessies kijken we naar terugkerende patronen, oefenen we met nieuwe reacties en vertalen we inzichten naar het dagelijks leven.",
    expectation:
      "Je werkt stap voor stap aan meer rust, richting en beweging op een manier die haalbaar blijft.",
  },
  {
    step: "4",
    title: "Evaluatie en afronding",
    duration: "kort evaluatiemoment of losse eindsessie",
    description:
      "We bespreken wat helpend was, waar je nu staat en of afronden, voortzetten of doorverwijzen logisch is.",
    expectation:
      "Het traject blijft overzichtelijk en we houden steeds oog voor wat nu echt passend is.",
  },
];

export const actPrinciples = [
  {
    title: "Ruimte maken voor wat je voelt",
    description:
      "Niet alles hoeft eerst weg. Vaak helpt het al om anders te leren omgaan met spanning, onzekerheid of lastige gedachten.",
  },
  {
    title: "Patronen leren herkennen",
    description:
      "Samen kijken we naar piekeren, vermijden, perfectionisme of uitstellen: wat gebeurt er precies, en wat houdt het in stand?",
  },
  {
    title: "Bewegen richting waarden",
    description:
      "We richten ons niet alleen op klachten, maar ook op wat jij belangrijk vindt en hoe je daar stap voor stap meer naar kunt handelen.",
  },
];

export const sessionExpectations = [
  "Heldere gesprekken zonder overbodig vakjargon.",
  "Concrete oefeningen of reflectievragen als dat helpend is.",
  "Regelmatig terugkoppelen naar jouw doelen en waarden.",
  "Ruimte om tempo, grenzen en passendheid steeds samen te bespreken.",
];

export const pricingItems: PricingItem[] = [
  {
    name: "Gratis kennismakingsgesprek",
    price: "Gratis",
    duration: "20 tot 30 minuten",
    description:
      "Een vrijblijvende eerste stap om je vraag te verkennen en te kijken of coaching past.",
    details: [
      "Kennismaken en vragen stellen",
      "Uitleg over werkwijze en passendheid",
      "Geen verplicht vervolg",
    ],
    featured: true,
  },
  {
    name: "Intake",
    price: "€95",
    duration: "60 minuten",
    description:
      "Een rustig eerste gesprek waarin we jouw situatie, vraag en doelen samen structureren.",
    details: [
      "Verhelderen van je coachvraag",
      "Eerste inschatting van thema's en grenzen",
      "Praktische richting voor het vervolg",
    ],
  },
  {
    name: "Losse sessie",
    price: "€95",
    duration: "60 minuten",
    description:
      "Voor wie flexibel wil werken aan concrete thema's, zonder direct een groot traject vast te leggen.",
    details: [
      "1-op-1 coaching",
      "Ruimte voor evaluatie per sessie",
      "Handig als je stap voor stap wilt kijken",
    ],
  },
  {
    name: "Studententarief",
    price: "€75",
    duration: "45 tot 60 minuten",
    description:
      "Een toegankelijke optie voor studenten die wel begeleiding zoeken, maar hun kosten overzichtelijk willen houden.",
    details: [
      "Zelfde rustige werkwijze",
      "Voor studievraagstukken, stress en onzekerheid",
      "Rustig instapniveau voor studenten",
    ],
  },
  {
    name: "Trajectvoorbeeld",
    price: "€425",
    duration: "5 sessies + evaluatie",
    description:
      "Een voorbeeld van hoe een compact traject eruit kan zien als je liever met wat meer houvast werkt.",
    details: [
      "Niet verplicht als standaardvorm",
      "Geschikt bij een afgebakend thema",
      "Overzichtelijk als compacte route",
    ],
  },
];

export const pricingNotes = [
  "Je hoeft niet meteen een traject te kopen om te kunnen starten.",
  "Een gratis kennismaking helpt juist om eerst te voelen of de match klopt.",
  "Als coaching niet passend lijkt, bespreken we dat eerlijk en zonder druk.",
];

export const aboutIntro = [
  "ACT Vooruit is bedoeld als een rustige en praktische plek voor studenten en young professionals die merken dat ze vastlopen, maar niet per se meteen zware hulp zoeken.",
  "Ik werk vanuit ACT als basis: helder kijken naar patronen, oefenen met wat lastig is en stap voor stap bewegen richting wat voor jou belangrijk is.",
  "Daarbij ben ik geen behandelaar. Juist die afbakening vind ik belangrijk, omdat veiligheid en passendheid voor mij altijd voorop staan.",
];

export const aboutValues = [
  {
    title: "Gelijkwaardig contact",
    description:
      "Geen afstandelijke expertrol, maar een sparringspartner die met je meedenkt en eerlijk terugkoppelt.",
  },
  {
    title: "Praktische focus",
    description:
      "We vertalen inzichten steeds naar kleine stappen die ook buiten een gesprek bruikbaar zijn.",
  },
  {
    title: "Zorgvuldige grenzen",
    description:
      "Als jouw vraag beter past bij behandeling of andere hulp, benoem ik dat duidelijk en denk ik mee over een vervolgstap.",
  },
];

export const aboutExpectations = [
  "Rustige, duidelijke gesprekken zonder opgeblazen beloftes.",
  "Ruimte voor twijfel, tempo en vragen.",
  "Aandacht voor wat er concreet speelt in studie, werk en dagelijks leven.",
  "Een werkwijze die menselijk en professioneel aanvoelt, zonder klinische sfeer.",
];

export const kennismakingIncluded = [
  "Kort bespreken waar je in vastloopt en wat je hoopt te vinden in begeleiding.",
  "Uitleg over hoe ACT Vooruit werkt en wat coaching wel en niet is.",
  "Samen inschatten of coaching nu passend lijkt voor jouw situatie.",
  "Ruimte om praktische vragen te stellen over intake, sessies en tarieven.",
];

export const kennismakingNotIncluded = [
  "Geen uitgebreide intake of volledig verdiepend trajectgesprek.",
  "Geen diagnose, behandeling of crisisopvang.",
  "Geen druk om direct een vervolgafspraak vast te leggen.",
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
      "Ik laat je niet met een losse afwijzing achter, maar denk mee over welke vorm van hulp waarschijnlijk logischer is.",
  },
  {
    title: "Veiligheid voor snelheid",
    description:
      "Soms is een langzamere, zorgvuldiger route juist de beste eerste stap. Dat blijft leidend.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Moet ik een diagnose hebben?",
    answer:
      "Nee. Je hoeft geen diagnose te hebben om contact op te nemen of om te kijken of coaching passend is. Vaak begint het juist met merken dat je vastloopt en nog niet goed weet wat logisch voelt.",
  },
  {
    question: "Is dit therapie?",
    answer:
      "Nee. ACT Vooruit biedt coaching en geen therapie, behandeling of diagnostiek. Dat betekent ook dat ik eerlijk kijk of jouw hulpvraag binnen coaching past.",
  },
  {
    question: "Wat is ACT eigenlijk?",
    answer:
      "ACT staat voor Acceptance and Commitment Therapy. Binnen deze praktijk gebruik ik ACT als praktische basis voor coaching: leren omgaan met lastige gedachten en gevoelens, patronen herkennen en bewegen richting wat belangrijk voor je is.",
  },
  {
    question: "Is ACT zweverig?",
    answer:
      "Nee. De insteek hier is juist concreet en nuchter. We gebruiken ACT niet als vaag concept, maar als praktische manier om anders met spanning, twijfel en vermijding om te gaan.",
  },
  {
    question: "Hoe weet ik of coaching bij mij past?",
    answer:
      "Een gratis kennismaking is precies bedoeld om dat te verkennen. We kijken samen naar je vraag, hoe je nu functioneert en of coaching een logische stap lijkt.",
  },
  {
    question: "Wat gebeurt er in een gratis kennismaking?",
    answer:
      "We bespreken kort waar je in vastloopt, wat je zoekt en hoe ACT Vooruit werkt. Daarna kun je rustiger beoordelen of je verder wilt.",
  },
  {
    question: "Wat gebeurt er in de intake?",
    answer:
      "In de intake nemen we meer tijd om je situatie, patronen en doelen in kaart te brengen. Zo ontstaat er meer helderheid over waar we in sessies praktisch aan gaan werken.",
  },
  {
    question: "Moet ik meteen een heel traject starten?",
    answer:
      "Nee. De website is bewust zo ingericht dat je ook klein kunt beginnen. Je hoeft dus niet direct een groot traject vast te leggen om een eerste stap te zetten.",
  },
  {
    question: "Is het online of fysiek?",
    answer:
      "Online en in regio Nijmegen kunnen beide passend zijn. Neem gerust contact op als je wilt afstemmen wat in jouw situatie praktisch voelt.",
  },
  {
    question: "Wat kost het?",
    answer:
      "De tarieven staan overzichtelijk op de tarievenpagina. Daar zie je ook dat een kennismaking gratis is en dat er ruimte is voor een studentvriendelijke optie.",
  },
  {
    question: "Wanneer verwijs je door?",
    answer:
      "Bij acute crisis, suïcidaliteit, psychose, ernstige ontregeling, trauma op de voorgrond of andere situaties waarin coaching niet veilig of passend genoeg is.",
  },
  {
    question: "Wat als ik al bij een psycholoog loop?",
    answer:
      "Dat kan soms naast elkaar bestaan, zolang de rolverdeling helder is en coaching daadwerkelijk aanvullend en passend blijft. Bij twijfel bespreken we dit zorgvuldig.",
  },
  {
    question: "Kan coaching naast behandeling?",
    answer:
      "Soms wel, maar niet automatisch. Het hangt af van je situatie, je doelen en of coaching op dat moment ondersteunend en overzichtelijk blijft.",
  },
  {
    question: "Is er een wachtlijst?",
    answer:
      "Dat hangt af van de actuele beschikbaarheid. Neem gerust contact op, dan hoor je snel wat op dit moment haalbaar is.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer:
      "Meestal begint het met een korte kennismaking. Daarna kijken we samen wat haalbaar en passend is qua tempo en vervolg.",
  },
];
