import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function BarTips() {
  return (
    <div className="relative mb-16 text-base font-openSans">
      <ul className="space-y-10">
        {[
          { title: "Pronađite mirno mesto", content: <>Restoran može biti stimulativno okruženje sa mnogo distrakcija za psa. To može izazvati<br /> 
          previše uzbuđenja za vašeg psa, što nije ono što želite, zato potražite sto u mirnom kutku<br />
          daleko od drugih gostiju. Takođe obratite pažnju da vaš pas ne ometa druge goste ili<br />
          konobare.</>},
         { title: "Držite ih na povocu", content: (
          <>
            Bez obzira koliko je dobro obučen pas i sluša komande, naročito onu da dođe do vas, <b>uvek ga<br />
            držite na povocu.</b> Na taj način ćete osigurati <b>bezbednost gostiju, ali i vašeg psa</b>, jer nikad ne<br />
            znate kako će ko da reaguje.<br /><br /><br />
            Roditelji su posebno zaštitnički nastrojeni prema maloj deci, čak iako je vaš pas samo hteo da<br />
            se igra. Ne dozvolite da bespotrebno upadate u neprijatne situacije i tako upropastite izlazak<br /> 
            sebi i drugima. 
            <b>Bonus savet:</b><i> Ne vezujte povodac za stolove, stolice ili drugi restoranski inventar -<br />
            ukoliko vaš pas odluči da potrči, može napraviti ozbiljnu štetu, a potencijalno i haos u restoranu.</i>
          </>
        ) },
          { title: "Ne dozvolite im da prose za hranu", content:<>
          Možda mislite da je vaš pas jednostavno očaravajući kada prosi za hranu, ali drugi<br />
          gosti možda neće imati isti stav. Istrenirajte psa tako da razume da prosjačenje<br />
          neće dovesti do toga da dobije ono što želi.</> },
          { title: "Držite ih dalje od hrane", content:<>
           Nemojte tražiti od svog psa da vam sedne u krilo ili na stolicu pored vas. Ovo ne samo što je<br />
          najverovatnije protiv politike restorana, već ćete omogućiti da mu hrana sa stola bude lako<br />
          dostupna.
           </> },
          { title: "Sprečite neprekidno lajanje", content:<>
          Neprekidno lajanje je siguran način da iznervirate druge goste, a može se desiti da vas osoblje<br />
          čak i zamoli da napustite restoran. Možda ne bi bilo loše da svom psu ponesete igračku ili<br />
          neku drugu zanimaciju.
          </> },
          { title: "Budite ljubazni prema drugim gostima", content: <>
          Malo ljubaznosti mnogo će značiti u građenju odnosa sa gostima, ali i osobljem.<br />
          Pobrinite se da vaš <b>pas ne skače na ljude i ne ometa</b> nikoga. Tako ćete pokazati da<br />
          ste odgovoran vlasnik ljubimca i bićete dobrodošli da ponovo dođete u bilo koje<br />
          doba dana.
          </> },
        ].map((tip, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex items-center mb-16 mt-16">
              <Image src={pawBullet} alt="Paw Bullet" width={24} height={24} className="mr-6" />
            <p className="font-semibold text-2xl">{tip.title}</p>
            </div>
            <p className="ml-12 mr-6 mt-0 text-2xl leading-normal">{tip.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
