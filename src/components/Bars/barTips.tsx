import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function BarTips() {
  return (
    <div className="relative mb-16 text-base font-openSans">
      <ul className="space-y-10">
        {[
          { title: "Pronađite mirno mesto", content: "Restoran može biti stimulativno okruženje sa mnogo distrakcija za psa. To može izazvati previše uzbuđenja za vašeg psa, što nije ono što želite, zato potražite sto u mirnom kutku daleko od drugih gostiju. Takođe obratite pažnju da vaš pas ne ometa druge goste ili konobare." },
          { title: "Držite ih na povocu", content: "Bez obzira koliko je dobro obučen pas i sluša komande, naročito onu da dođe do vas, uvek ga držite na povocu. Na taj način ćete osigurati bezbednost gostiju, ali i vašeg psa, jer nikad ne znate kako će ko da reaguje." },
          { title: "Ne dozvolite im da prose za hranu", content: "Možda mislite da je vaš pas jednostavno očaravajući kada prosi za hranu, ali drugi gosti možda neće imati isti stav. Istrenirajte psa tako da razume da prosjačenje neće dovesti do toga da dobije ono što želi." },
          { title: "Držite ih dalje od hrane", content: "Nemojte tražiti od svog psa da vam sedne u krilo ili na stolicu pored vas. Ovo ne samo što je najverovatnije protiv politike restorana, već ćete omogućiti da mu hrana sa stola bude lako dostupna." },
          { title: "Sprečite neprekidno lajanje", content: "Neprekidno lajanje je siguran način da iznervirate druge goste, a može se desiti da vas osoblje čak i zamoli da napustite restoran." },
          { title: "Budite ljubazni prema drugim gostima", content: "Malo ljubaznosti mnogo će značiti u građenju odnosa sa gostima, ali i osobljem. Pobrinite se da vaš pas ne skače na ljude i ne ometa nikoga." },
        ].map((tip, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex items-center mb-4">
              <Image src={pawBullet} alt="Paw Bullet" width={24} height={24} className="mr-6" />
            <h2 className="font-bold">{tip.title}</h2>
            </div>
            <p className="ml-12 mr-6 mt-0">{tip.content}</p>
          </li>
        ))}
      </ul>
      <p className="mt-16 ml-12">Na kraju, važno je znati kada je vreme da napustite restoran. Ako vaš pas nije raspoložen da mirno sedi ili jednostavno nešto ne ide po planu, nemojte pokušavati da silite stvari. Bolje je da ranije odete i pokušate ponovo drugi put, nego da izazovete neprijatnu situaciju.</p>
    </div>
  );
}
