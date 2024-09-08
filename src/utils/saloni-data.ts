import { SaloniData } from "./types";
import scissors from "@/../public/assets/images/Saloni/Section1.png";
import higijena from "@/../public/assets/images/Saloni/Higijena.png";
import saloni from "@/../public/assets/images/Saloni/SaloniZaPse.png";
import kupanje from "@/../public/assets/images/Saloni/Kupanje.png";

export const SALONI_DATA: SaloniData[] = [
  {
    image: scissors,
    title: "Redovno cetkanje dlake i sisanje psa",
    description:
      "Mnogi vlasnici pasa ne uspevaju pravilno da češljaju svoje pse, jer češljanje dlake može delovati kao pomalo nepotrebno opterećenje. Međutim, redovno češljanje je od ključnog značaja za održavanje zdrave i lepe dlake. Šišanje pasa podrazumeva skraćivanje dlake mašinicom, makazama ili trimerom.",
    description2:
      "Dlaka psa, ukoliko se redovno ne češlja, obično postaje ućebana, pahuljasta i kovrdžava, što je veoma neugodno i postaje izvor iritacije. Četkanje može pomoći u stimulisanju kože i folikula dlake koji proizvode ulja koja kožu i dlaku održavaju zdravom.",
  },
  {
    image: kupanje,
    title: "Kupanje i čišćenje psa",
    description:
      "Kada kupate svog psa, važno je znati da li treba da obavite celokupno pranje ili samo pranje lica. Mnogo je važno koristiti pravi šampon za odgovarajući tip dlake.",
    description2:
      "Ukoliko imate psa sa dugom dlakom, trebaće vam specijalni šampon dizajniran da ukloni prljavštinu, ulje i druge čestice iz dlake. Psi imaju drugačiji pH kože od nas, a ljudski sapuni i šamponi su često previše alkalni za pse i mogu izazvati svrab i gubitak dlake.",
  },
  {
    image: higijena,
    title: "Dobra oralna higijena",
    description:
      "Ako zubi vašeg psa nisu zdravi, posledice mogu biti neugodne. Ne samo da će imati loš zadah, već će patiti i od nekoliko oralnih zdravstvenih problema.",
    description2:
      "Čišćenje zuba vašeg psa najvažnija je stvar koju možete uraditi, ali postoji i mnogo drugih koje će pomoći vašem ljubimcu da živi duži, zdraviji život.",
  },
  {
    image: saloni,
    title: "Pronalaženje salona za pse",
    description:
      "Pošto postoji mnogo salona, morate biti sigurni gde dovodite svog psa. Usluge koje se pružaju razlikuju se u zavisnosti od profesionalnog osoblja, a trebalo bi da obuhvataju kupanje, sečenje noktiju, pranje zuba i negu dlake. Osoblje koje će negovati vašeg psa takođe bi trebalo da odgovori i na pitanja ukoliko ih imate.",
    description2:
      "Mi smo napravili nesponzorisanu listu kako bi vam omogučili lakši odabir salona i frizera za pse:",
  },
];