import bg1 from "../../public/assets/images/Parks/bg1.png";
import bg2 from "../../public/assets/images/Parks/bg2.png";
import bg3 from "../../public/assets/images/Parks/bg3.png";
import bg4 from "../../public/assets/images/Parks/bg4.png";
import bg5 from "../../public/assets/images/Parks/bg5.png";
import bg6 from "../../public/assets/images/Parks/bg6.png";
import bg7 from "../../public/assets/images/Parks/bg7.png";
import bg8 from "../../public/assets/images/Parks/bg8.png";
import bg9 from "../../public/assets/images/Parks/bg9.png";
import bg10 from "../../public/assets/images/Parks/bg10.png";
import ns1 from "../../public/assets/images/Parks/ns1.png";
import ns2 from "../../public/assets/images/Parks/ns2.png";
import { StaticImageData } from "next/image";

export interface Park {
    name: string;
    image?: StaticImageData; 
    source?: string; 
    city?: string; // Added city field for better categorization
}

export const PARK_DATA: Park[] = [
  // Belgrade Parks
  {
    name: "TAŠMAJDANSKI PARK – Bulevar revolucije, Palilula",
    image: bg1,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "KARAĐORĐEV PARK – Bulevar oslobođenja, Vračar",
    image: bg2,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "ČUBURSKI PARK – Cara Nikolaja II, Vračar",
    image: bg3,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK MILUTINA MILANKOVIĆA – Tiršova ulica i Bulevar oslobođenja, Savski venac",
    image: bg4,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PANČIĆEV PARK – Pančićeva ulica, Stari grad",
    image: bg5,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK KOPITAREVA GRADINA – Đure Daničića, Stari grad",
    image: bg6,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK U 22. BLOKU – Bulevar Arsenija Čarnojevića, Novi Beograd",
    image: bg7,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK KOD MOSTARSKE PETLJE – Sarajevska, Savski venac",
    image: bg8,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK BELE VODE – Belo vrelo i Ibarska magistrala, Čukarica",
    image: bg9,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK U 30. BLOKU – Bulevar Zorana Đinđića, Novi Beograd",
    image: bg10,
    source: "njuska.com",
    city: "Belgrade",
  },
  {
    name: "PARK ZA PSE LABUDOVO BRDO – Ulica Gočka bb",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },
  {
    name: "PARK ZA PSE MIRIJEVO – Ulica 16. oktobra",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },
  {
    name: "ŠUMICE DOG PARK – Ustanička ulica 125",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },
  {
    name: "PARK ZA PSE BEŽANIJSKA KOSA – Dimitrija Georgijevića Starika 4, Bežanijska kosa",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },
  {
    name: "PARK ZA PSE ZEMUN – Zemunski park, Gradski park 9",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },
  {
    name: "PARK ZA PSE NOVA GALENIKA – Jovana Stoisavljevića 37, Nova Galenika",
    image: undefined,
    source: undefined,
    city: "Belgrade",
  },

  {
    name: "Park za pse Železnički park – Železnički park",
    image: ns1,
    source: "Wikipedia",
    city: "Novi Sad",
  },
  {
    name: "Park za pse Liman – Limanski park",
    image: ns2,
    source: "Wikipedia",
    city: "Novi Sad",
  },
  {
    name: "Park za pse Detelinara – Ulica Oblačića Rada",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "PARK ZA PSE MIRIJEVO – Ulica 16. oktobra",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "Igralište za pse – Ulica Veselina Masleše",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "Igralište za pse – Bistrica, Seljačkih buna",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "Igralište za pse – Bulevar kneza Miloša",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "PARK ZA PSE TELEP – Ulica Jovana Popovića",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "Igralište za pse – Ulica Ive Andrića",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "PARK za pse – Trg Republike",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
  {
    name: "PARK za pse – Čenejska, Klisa",
    image: undefined,
    source: undefined,
    city: "Novi Sad",
  },
];
