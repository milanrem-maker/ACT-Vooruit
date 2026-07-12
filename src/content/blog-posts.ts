export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  status: "published" | "upcoming";
  publishedAt?: string;
  sections?: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "waarom-ik-act-vooruit-zorgvuldig-opbouw",
    title: "Waarom ik ACT Vooruit zorgvuldig opbouw",
    description:
      "ACT Vooruit is nog in voorbereiding. Ik leg uit waarom ik opleiding, grenzen, veiligheid en een haalbare start belangrijker vind dan snel lanceren.",
    category: "Achter ACT Vooruit",
    readingTime: "7 min leestijd",
    status: "published",
    publishedAt: "2026-07-12",
    sections: [
      {
        paragraphs: [
          "ACT Vooruit bevindt zich nog in de voorbereidingsfase. De website krijgt steeds meer vorm, maar de praktijk is nog niet officieel gestart. Dat onderscheid vind ik belangrijk om duidelijk te maken. Een website kan er al verzorgd uitzien, terwijl er achter de schermen nog veel werk nodig is voordat een praktijk verantwoord van start kan gaan.",
          "Ik wil niet sneller lanceren dan professioneel verantwoord voelt. Daarom werk ik nu stap voor stap aan de basis. Niet alleen aan teksten en vormgeving, maar ook aan de werkwijze, grenzen, intake, veiligheid en bedrijfsprocessen. Dat zijn misschien minder zichtbare onderdelen, maar ze bepalen wel of iemand straks weet waar die aan toe is.",
        ],
      },
      {
        heading: "Eerst mijn ACT-cursus afronden",
        paragraphs: [
          "Op dit moment volg ik een ACT-cursus bij ACT in Actie - Cursus & Opleiding. Ik wil deze cursus afronden voordat ACT Vooruit daadwerkelijk van start gaat. Daarom gebruik ik geen titels die suggereren dat de cursus al is afgerond. De opleiding loopt nog en daar wil ik eerlijk over zijn.",
          "ACT wordt de inhoudelijke basis van mijn coaching. Juist daarom wil ik voldoende tijd nemen om de stof te leren, ermee te oefenen en na te denken over een zorgvuldige toepassing binnen coaching. ACT Vooruit biedt coaching en geen therapie, behandeling of diagnostiek. Die grens moet niet alleen ergens onderaan de website staan, maar ook terugkomen in de manier waarop ik straks gesprekken voer en keuzes maak.",
        ],
      },
      {
        heading: "Ervaring tijdens mijn minor aan de HAN",
        paragraphs: [
          "Tijdens mijn minor aan de HAN begeleidde ik als studentcoach twee studenten met een concrete coachvraag. Die ervaring gaf mij de kans om gesprekken te voeren over onderwerpen die in deze levensfase kunnen spelen. Ik benoem bewust dat het om twee studenten ging. Ik wil geen grotere ervaring suggereren dan ik daadwerkelijk heb opgebouwd.",
          "Die ervaring is een onderdeel van mijn basis, maar niet het eindpunt. Een eigen praktijk vraagt ook om heldere afspraken, grenzen, reflectie en een manier om te beoordelen wanneer coaching wel of niet passend is. Daarom werk ik deze onderdelen uit voordat ACT Vooruit echt begint.",
        ],
      },
      {
        heading: "Een nieuwe opleiding vanaf september",
        paragraphs: [
          "In september begin ik met een nieuwe opleiding. Ik wil eerst ervaren hoeveel tijd en energie die opleiding in de praktijk vraagt. Pas daarna kan ik realistisch bepalen hoeveel ruimte er daarnaast is voor ACT Vooruit. Dat betekent dat ik nu nog geen starttempo of beschikbaarheid wil beloven die later misschien niet haalbaar blijkt.",
          "Voor mij is dat geen uitstel om het uitstel. Het is een manier om te voorkomen dat enthousiasme belangrijker wordt dan aandacht en zorgvuldigheid. Als ACT Vooruit start, wil ik voldoende ruimte hebben voor voorbereiding, gesprekken, administratie en evaluatie. De praktijk moet passen binnen wat ik op dat moment verantwoord kan dragen.",
        ],
      },
      {
        heading: "Wat ik nu achter de schermen voorbereid",
        paragraphs: [
          "Ondertussen werk ik verder aan de website en de werkwijze van ACT Vooruit. Ik beschrijf voor wie coaching bedoeld is, hoe een kennismaking en intake verlopen en wanneer andere hulp logischer is. Ook kijk ik naar privacy, veilige gegevensverwerking en de praktische bedrijfsprocessen die nodig zijn om afspraken zorgvuldig te organiseren.",
          "De intake krijgt bijvoorbeeld pas een echte digitale vorm als de opslag, toegang en bewaartermijnen goed zijn geregeld. Tot die tijd wil ik geen openbaar formulier gebruiken waarin iemand gevoelige informatie kan achterlaten. Dezelfde zorgvuldigheid geldt voor opvolgmails en notities. Eerst moet duidelijk zijn wat nodig is, waarom het nodig is en hoe het wordt beschermd.",
        ],
      },
      {
        heading: "Coaching met duidelijke grenzen",
        paragraphs: [
          "ACT Vooruit is bedoeld als praktische coaching voor studenten en young professionals. Het is geen vervanging voor therapie of behandeling. Ook verricht ACT Vooruit geen diagnostiek. Als een hulpvraag niet bij coaching past, moet daar eerlijk over worden gesproken. Veiligheid en passendheid gaan voor de wens om iemand toch binnen de praktijk te houden.",
          "Die afbakening vraagt om een duidelijke werkwijze. Een gratis kennismaking is bedoeld om kort te verkennen wat iemand zoekt en of coaching mogelijk past. Het is geen volledige coachsessie en ook geen beoordeling op afstand. Pas wanneer beide kanten denken dat een vervolg logisch is, kan een intake worden voorbereid.",
        ],
      },
      {
        heading: "Zorgvuldig starten boven snel starten",
        paragraphs: [
          "Ik begrijp dat het aantrekkelijk kan zijn om een idee zo snel mogelijk live te zetten. Toch voelt dat voor ACT Vooruit niet als de juiste route. De praktijk gaat over mensen die mogelijk al twijfelen, piekeren of vastlopen. Dan moeten teksten, processen en grenzen zo duidelijk mogelijk zijn.",
          "Daarom kies ik ervoor om de voorbereiding zichtbaar te maken. ACT Vooruit is in opbouw. De ACT-cursus loopt, de nieuwe opleiding begint in september en ik onderzoek daarna hoeveel ruimte er werkelijk is om de praktijk goed te starten. Tot die tijd werk ik verder aan een stevige en eerlijke basis.",
          "Zorgvuldig starten is voor mij belangrijker dan zo snel mogelijk starten. Als ACT Vooruit daadwerkelijk opent, wil ik dat doen met realistische verwachtingen, duidelijke grenzen en genoeg aandacht voor de mensen die contact opnemen. Niet alles hoeft nu al af te zijn, maar wat er staat moet wel kloppen.",
        ],
      },
    ],
  },
  {
    slug: "piekeren-waarom-je-hoofd-moeilijk-stil-wordt",
    title: "Piekeren: waarom je hoofd zo moeilijk stil wordt",
    description:
      "Piekeren kan voelen alsof je iets oplost, terwijl je hoofd steeds minder rust krijgt. Een artikel over herkennen wat er gebeurt en anders leren reageren.",
    category: "Piekeren",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "uitstellen-en-vermijden",
    title: "Uitstellen en vermijden: waarom het even oplucht",
    description:
      "Uitstellen is niet altijd luiheid. Dit artikel gaat over de tijdelijke opluchting van vermijden en waarom de druk daarna vaak terugkomt.",
    category: "Vermijding",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "prestatiedruk-en-vergelijken",
    title: "Prestatiedruk en jezelf vergelijken met anderen",
    description:
      "Studie, stage, werk en sociale media kunnen het gevoel geven dat je achterloopt. Een nuchtere blik op verwachtingen en vergelijken.",
    category: "Prestatiedruk",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "stress-angstgevoelens-en-somberheid",
    title: "Stress, angstgevoelens en somberheid: wanneer zet je een eerste stap?",
    description:
      "Je hoeft niet eerst precies te weten hoe erg iets is. Dit artikel helpt om rustig te kijken wanneer het logisch is om een vraag te stellen.",
    category: "Eerste stap",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "wat-act-is-zonder-ingewikkelde-taal",
    title: "Wat ACT is, zonder ingewikkelde taal",
    description:
      "ACT draait niet om moeilijke gedachten uitschakelen. Het gaat om anders reageren en bewegen richting wat voor jou belangrijk is.",
    category: "ACT",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "hulp-zoeken-zonder-therapie",
    title: "Hulp zoeken zonder dat het meteen therapie hoeft te zijn",
    description:
      "Veel mensen twijfelen of hun vraag groot genoeg is. Een artikel over coaching als mogelijke eerste stap en de grenzen daarvan.",
    category: "Twijfel",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "middelengebruik-studenten-young-professionals",
    title: "Middelengebruik: wanneer iets normaals toch in de weg zit",
    description:
      "Middelengebruik kan in je omgeving heel normaal voelen en toch invloed hebben op hoe je je voelt of functioneert. Zonder oordeel, wel bespreekbaar.",
    category: "Middelengebruik",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
  {
    slug: "meer-rust-in-je-hoofd",
    title: "Meer rust in je hoofd: kleine stappen in het dagelijks leven",
    description:
      "Meer rust ontstaat meestal niet door één grote oplossing. Dit artikel gaat over kleine, herhaalbare stappen in gewone situaties.",
    category: "Dagelijks leven",
    readingTime: "Binnenkort",
    status: "upcoming",
  },
];

export const publishedBlogPosts = blogPosts.filter(
  (post) => post.status === "published",
);

export function getPublishedBlogPost(slug: string) {
  return publishedBlogPosts.find((post) => post.slug === slug);
}
