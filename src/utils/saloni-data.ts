import { SaloniData } from "./types";
import scissors from "@/../public/assets/images/Saloni/Section1.svg";
import higijena from "@/../public/assets/images/Saloni/Higijena.svg";
import saloni from "@/../public/assets/images/Saloni/SaloniZaPse.svg";
import kupanje from "@/../public/assets/images/Saloni/Kupanje.svg";

export const SALONI_DATA: SaloniData[] = [
  {
    image: scissors,
    title: "Redovno četkanje dlake i šišanje psa",
    description:
      "Mnogi vlasnici pasa ne uspevaju pravilno da češljaju svoje pse, jer češljanje dlake može delovati kao pomalo[br] nepotrebno opterećenje. Međutim, redovno češljanje je od ključnog značaja za održavanje zdrave i lepe dlake.[br] Šišanje pasa podrazumeva [b]skraćivanje dlake mašinicom, makazama ili trimerom.[/b]",
    description2:
      "Dlaka psa, ukoliko se redovno ne češlja, obično postaje ućebana, pahuljasta i kovrdžava, što je veoma[br] neugodno i postaje izvor iritacije. Četkanje može pomoći u stimulisanju kože i folikula dlake koji proizvode ulja[br] koja kožu i dlaku održavaju zdravom.",
  },
  {
    image: kupanje,
    title: "Kupanje i čišćenje psa",
    description:
      "Kada kupate svog psa, važno je znati da li treba da obavite celokupno pranje ili samo pranje lica. Mnogo je[br] važno koristiti [b]pravi šampon za odgovarajući tip dlake.[/b]",
    description2:
      "Ukoliko imate psa sa dugom dlakom, trebaće vam specijalni šampon dizajniran da ukloni prljavštinu, ulje i[br] druge čestice iz dlake. Psi imaju drugačiji pH kože od nas, a ljudski sapuni i šamponi su često previše alkalni za[br] pse i mogu izazvati svrab i gubitak dlake.",
  },
  {
    image: higijena,
    title: "Dobra oralna higijena",
    description:
      "Ako zubi vašeg psa nisu zdravi, posledice mogu biti neugodne. Ne samo da će imati loš zadah, već će patiti i od[br] nekoliko oralnih zdravstvenih problema.",
    description2:
      "Čišćenje zuba vašeg psa najvažnija je stvar koju možete uraditi, ali postoji i mnogo drugih koje će pomoći[br] vašem ljubimcu da živi duži, zdraviji [b]život.[/b]",
  },
  {
    image: saloni,
    title: "Pronalaženje salona za pse",
    description:
      "Pošto postoji mnogo salona, morate biti sigurni gde dovodite svog psa. Usluge koje se pružaju razlikuju se u[br] zavisnosti od profesionalnog osoblja, a trebalo bi da obuhvataju kupanje, sečenje noktiju, pranje zuba i negu[br] dlake. Osoblje koje će negovati vašeg psa takođe bi trebalo da odgovori i na pitanja ukoliko ih imate.",
    description2:
      "Mi smo napravili [b]nesponzorisanu[/b] listu kako bi vam omogučili lakši odabir salona i frizera za pse:",
  },
];
