import { BlogData } from "./types";
import citati from "../../public/assets/images/Blog/101Citat.png";
import azili from "../../public/assets/images/Blog/Azili.png";
import hrana from "../../public/assets/images/Blog/Hrana.png";
import imena from "../../public/assets/images/Blog/Imena.png";
import kafici from "../../public/assets/images/Blog/Kafici.png";
import parkovi from "../../public/assets/images/Blog/Parkovi.png";
import perionice from "../../public/assets/images/Blog/Perionice.png";

export const BLOG_DATA: BlogData[] = [
  {
    title: "101 citat o psima koji ce dotaci srce svakog vlasnika",
    description:
      "Pas ti je omiljeni prijatelj, ali želiš da saznaš šta drugi imaju da kažu o svojim čupavim prijateljima?! Spremili smo ti 101 bezvremenski citat poznatih načnika, muzičara i drugih cool ljudi. Uživaj!",
    image: citati,
    link: "/blog/citati",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: "Citati i statusi  o psima poznatih književnika, glumaca i drugih javnih ličnosti koji će vas navesti da ih još više zavolite.",
  },
  {
    title: "Azili i prihvatilišta za pse u gradovima Srbije",
    description:
      "Ako tražiš psa za udomljavanje, azili mogu biti pravo mesto za tebe. Takođe, ako si izgubio psa, možda se baš tamo nalazi. Pripremili smo ti spisak azila po gradovima – na tebi je da ih kontaktiraš.",
    image: azili,
    link: "/blog/shelters",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: "Želite da udomite psa? Izgubili ste ljubimca, ali ne znate gde da ga potražite? Možda vam azili mogu pomoći. Pogledajte listu azila za sve veće gradove Srbije.",
  },
  {
    title: "Kako izabrati najbolju hranu za pse - Lista brendova za 2024.",
    description:
      "Voliš da ti pas fino i zdravo ručka, ali ne možeš da se odlučiš za određenog proizvođača?! Ne brini, spremili smo analize i liste proizvoda koje će ti pomoći da odabereš pravu hranu za svog ljubimca.",
    image: hrana,
    link: "/blog/food",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: " Kakvu vrstu hrane dati ljubimcu? Koju marku kvalitetnih granula odabrati? | Lista saveta koja će olakšati život vama i vašem psu | Top 10 brendova za 2024.",
  },
  {
    title: "Imena za pse koja \"kidaju\" po komšiluku, a i šire",
    description:
      " Odabrali smo preko 250 muških i ženskih imena inspirisanih superherojima, planetama, crtanim i filmskim likovima. Ne gubi vreme već pronađi zanimljivo, smešno, možda čak i neobično ime za psa. Srećno!",
    image: imena,
    link: "/blog/names",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: " Treba ti inspiracija za ime psa? Preko 250 muških, ženskih, slatkih, cool, neobičnih, moćnih, ma kakvih poželiš imena! Srećan izbor!",
  },
  {
    title: "Koji restorani i kafići su pet friendly u Beogradu?",
    description:
      "Nalaziš se u Beogradu i tražiš kafić ili restoran u kom ćeš udobno da se osećaš sa svojim psom.  Pogledaj listu PET friendly lokala koje smo ti pripremili kao i smernice za ponašanje ljubimaca.",
    image: kafici,
    link: "/blog/bars",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: "Živiš u Beogradu, imaš psa i želiš da ti pravi društvo u kafiću ili restoranu? Spremili smo ti listu pet friendly lokala kao i savete za ponašanje ljubimca",
  },
  {
    title: " Parkovi za pse - gde se nalaze u Novom Sadu i Beogradu",
    description:
      "Kada živiš u gradu neophodno je poznavati parkove u kojima psi mogu slobodno da se igraju i socijalizuju. Pripremili smo liste po gradovima da bi ti imao više vremena da se igraš sa svojim ljubimcem.",
    image: parkovi,
    link: "/blog/parks",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: "Treba ti park gde možeš slobodno da pustiš psa da se igra? Napravili smo ti listu parkova u Novom Sadu i Beogradu gde možeš da uživaš sa svojim ljubimcem.",
  },
  {
    title: "Samouslužne perionice za pse - gde i kako okupati psa",
    description:
      "Imaš prljavog psa, ali ne želiš kući da napraviš haos? Spremili smo ti savete kako da ga lako i jednostavno okupaš u uslužnoj perionici, kao i gde da ih nađeš u većim gradovima Srbije. Srećno kupanje!",
    image: perionice,
    link: "/blog/wash",
    timeToRead: "11.07.2024 - 5 minuta citanja",
    meta: "Saznajte šta su samouslužne perionice za pse i koliko košta usluga kupanja pasa | Lista perionica za 2025. - Beograd, Novi Sad, Subotica, Niš, Kragujevac.",
  },
];
