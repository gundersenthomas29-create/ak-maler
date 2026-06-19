import innvendigBilde from "@/assets/innvendig.jpg";
import utvendigBilde from "@/assets/utvendig.jpg";
import gulvBilde from "@/assets/gulvlegging.jpg";
import flisBilde from "@/assets/flislegging.jpg";
import tapetBilde from "@/assets/tapetsering.jpg";
import fjerneBilde from "@/assets/fjerne-maling.jpg";
import flytBilde from "@/assets/flytsparkling.jpg";

export interface Tjeneste {
  slug: string;
  navn: string;
  kortBeskrivelse: string;
  ingress: string;
  hvaInkluderes: string[];
  hvorforVelgeOss: string;
  bilde: string;
}

const raw: Omit<Tjeneste, "slug">[] = [
  {
    navn: "Innvendig maling",
    kortBeskrivelse:
      "Med maling kan vi gjøre det meste. Å male et rom i riktig farge kan gjøre underverker.",
    ingress:
      "Med maling kan vi gjøre det meste. Å male et rom i riktig farge kan gjøre underverker. Vi utfører det vanlige malerarbeidet — selvfølgelig med førsteklasses underarbeid med sparkling og grunning/kvistlakk.",
    hvaInkluderes: [
      "Sparkling, slipning og grunning",
      "Kvistlakk og forberedelse av underlag",
      "Maling av tak, vegger og lister",
      "Fargerådgivning og prøvestrøk",
      "Tildekking og rydding etter endt jobb",
    ],
    hvorforVelgeOss:
      "Et godt malerarbeid handler om det du ikke ser — underarbeidet. Vi tar oss tid til å sparkle, slipe og grunne ordentlig, slik at fargen ligger jevnt og varer.\n\nVi rydder etter oss og leverer rommet ferdig til innflytting — uten dryppmerker, malingsøl eller halvferdige hjørner.",
    bilde: innvendigBilde,
  },
  {
    navn: "Utvendig maling",
    kortBeskrivelse:
      "Utvendig maling er viktig for vedlikehold mot vær — og som forskjønnelse.",
    ingress:
      "Utvendig maling er viktig for vedlikehold mot vær — og som forskjønnelse. Regelmessig vedlikehold gjelder både for tre- og murfasader.",
    hvaInkluderes: [
      "Vask og skraping av eksisterende maling",
      "Grunning og maling av trefasader",
      "Behandling av murfasader",
      "Maling av vinduer, dører og listverk",
      "Stillas og sikring av arbeidsplass",
    ],
    hvorforVelgeOss:
      "Norsk vær er hardt mot fasaden. Vi bruker malingsystemer som er tilpasset klimaet, og legger vekt på riktig forarbeid slik at jobben varer i mange år.\n\nVi planlegger arbeidet etter været — og sørger for at fasaden er beskyttet hele veien fra vask til siste strøk.",
    bilde: utvendigBilde,
  },
  {
    navn: "Gulvlegging",
    kortBeskrivelse:
      "Vinyl, linoleum eller tepper? Valget er ditt, vi leverer komplett jobb med maler- og gulvarbeid.",
    ingress:
      "Vinyl, linoleum eller tepper? Valget er ditt, men vi leverer en komplett jobb — med både malerarbeid og gulvlegging i samme leveranse.",
    hvaInkluderes: [
      "Legging av vinyl, linoleum og tepper",
      "Forberedelse og avretting av underlag",
      "Listverk og overganger",
      "Kombinert maler- og gulvjobb",
      "Bortkjøring av gammelt gulvbelegg",
    ],
    hvorforVelgeOss:
      "Når samme firma står for både maling og gulv, slipper du å koordinere flere håndverkere — og du får ett kontaktledd for hele jobben.\n\nVi har erfaring med både private hjem og næringslokaler, og leverer et resultat som tåler daglig bruk.",
    bilde: gulvBilde,
  },
  {
    navn: "Flislegging / Bad",
    kortBeskrivelse:
      "Å fornye badet er enkelt, med mesterhjelp. Lang erfaring som baderomsentreprenør.",
    ingress:
      "Å fornye badet er enkelt, med mesterhjelp fra AK Malerservice! Vi har lang erfaring som baderomsentreprenør — fra grunnarbeid til flislegging.",
    hvaInkluderes: [
      "Membran og tetting etter våtromsnormen",
      "Flislegging på gulv og vegg",
      "Fuging og avslutning",
      "Koordinering med rørlegger og elektriker",
      "Komplett baderomsoppussing",
    ],
    hvorforVelgeOss:
      "Et bad må tåle vann i mange tiår. Vi følger våtromsnormen og dokumenterer arbeidet — slik at både du og forsikringsselskapet vet at jobben er gjort rett.\n\nVi tar baderomsprosjektet fra rivning til ferdig flislagt rom, og holder fremdriften gjennom hele oppussingen.",
    bilde: flisBilde,
  },
  {
    navn: "Tapetsering",
    kortBeskrivelse:
      "Fin tapet løfter opplevelsen av rommet. Ikke vær redd for mønster.",
    ingress:
      "Fin tapet løfter opplevelsen av rommet. Ikke vær redd for mønster — da kan du vise enda mer personlighet i interiøret.",
    hvaInkluderes: [
      "Tapetsering av enkeltvegg eller hele rom",
      "Mønstertilpasning og presise skjøter",
      "Klargjøring og sparkling av underlag",
      "Fjerning av gammel tapet",
      "Rådgivning om tapettype og mønster",
    ],
    hvorforVelgeOss:
      "Tapet med mønster krever rolig hånd og presisjon i skjøtene. Det er der forskjellen mellom amatør og fagmann blir synlig.\n\nVi hjelper deg gjerne med å velge tapet som står seg over tid — og sørger for at resultatet ser ut som en helhet, ikke et lappverk.",
    bilde: tapetBilde,
  },
  {
    navn: "Fjerne maling",
    kortBeskrivelse:
      "Effektiv malingfjerning er en av våre spesialiteter. Overlat tidkrevende arbeid til oss.",
    ingress:
      "Effektiv malingfjerning er en av våre spesialiteter. Overlat et tidkrevende arbeid til effektive spesialister!",
    hvaInkluderes: [
      "Fjerning av maling fra tre, mur og metall",
      "Mekanisk slipning og varmebehandling",
      "Kjemisk malingfjerning ved behov",
      "Klargjøring for ny overflatebehandling",
      "Støvfri prosess der det er mulig",
    ],
    hvorforVelgeOss:
      "Det å fjerne gammel maling er ofte halvparten av jobben på et restaureringsprosjekt. Vi har utstyret og teknikkene som gjør det effektivt — uten å skade underlaget.\n\nVi velger metode etter type underlag og malingstype, slik at flaten er klar for nytt strøk når vi er ferdig.",
    bilde: fjerneBilde,
  },
  {
    navn: "Flytsparkling",
    kortBeskrivelse:
      "Selvutjevnende gulvsparkel for et plant og solid underlag før gulvlegging.",
    ingress:
      "Flytsparkling gir deg et helt plant gulv før belegg, parkett eller fliser legges. Vi utfører flytsparkling i både små og store rom, og sørger for at underlaget er klart til neste fag.",
    hvaInkluderes: [
      "Klargjøring og priming av betongunderlag",
      "Flytsparkling i ønsket tykkelse",
      "Tørkekontroll før gulvlegging",
      "Avrettingsmasse for skjeve gulv",
      "Koordinering med gulvlegger",
    ],
    hvorforVelgeOss:
      "Et godt sluttresultat på gulvet starter med et plant underlag. Vi måler høyder, vurderer fall og blander massen til riktig konsistens — slik at neste fag overtar et perfekt underlag.\n\nVi tar både små reparasjoner og store flater, og holder fremdrift slik at gulvleggeren kan starte når massen er herdet.",
    bilde: flytBilde,
  },
];

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const tjenester: Tjeneste[] = raw.map((t) => ({
  ...t,
  slug: slugify(t.navn),
}));
