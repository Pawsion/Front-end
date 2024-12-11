import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function BarTips() {
  return (
    <div className="relative mb-16 -mt-8 text-base sm:text-lg lg:text-2xl font-openSans font-regular lg:w-3/4">
      <ul className="lg:space-y-16 space-y-8">
        {[
          {
            title: "Pronađite mirno mesto", content: <>Restoran može biti stimulativno okruženje sa mnogo distrakcija za psa. To može izazvati 
              previše uzbuđenja za vašeg psa, što nije ono što želite, zato potražite sto u mirnom kutku 
              daleko od drugih gostiju. Takođe obratite pažnju da vaš pas ne ometa druge goste ili 
              konobare.</>
          },
          {
            title: "Držite ih na povocu", content: (
              <>
                Bez obzira koliko je dobro obučen pas i sluša komande, naročito onu da dođe do vas, <b>uvek ga 
                  držite na povocu.</b> Na taj način ćete osigurati <b>bezbednost gostiju, ali i vašeg psa</b>, jer nikad ne 
                znate kako će ko da reaguje.   
                Roditelji su posebno zaštitnički nastrojeni prema maloj deci, čak iako je vaš pas samo hteo da 
                se igra. Ne dozvolite da bespotrebno upadate u neprijatne situacije i tako upropastite izlazak 
                sebi i drugima.
                <b>Bonus savet:</b><i> Ne vezujte povodac za stolove, stolice ili drugi restoranski inventar - 
                  ukoliko vaš pas odluči da potrči, može napraviti ozbiljnu štetu, a potencijalno i haos u restoranu.</i>
              </>
            )
          },
          {
            title: "Ne dozvolite im da prose za hranu", content: <>
              Možda mislite da je vaš pas jednostavno očaravajući kada prosi za hranu, ali drugi 
              gosti možda neće imati isti stav. Istrenirajte psa tako da razume da prosjačenje 
              neće dovesti do toga da dobije ono što želi.</>
          },
          {
            title: "Držite ih dalje od hrane", content: <>
              Nemojte tražiti od svog psa da vam sedne u krilo ili na stolicu pored vas. Ovo ne samo što je 
              najverovatnije protiv politike restorana, već ćete omogućiti da mu hrana sa stola bude lako 
              dostupna.
            </>
          },
          {
            title: "Sprečite neprekidno lajanje", content: <>
              Neprekidno lajanje je siguran način da iznervirate druge goste, a može se desiti da vas osoblje 
              čak i zamoli da napustite restoran. Možda ne bi bilo loše da svom psu ponesete igračku ili 
              neku drugu zanimaciju.
            </>
          },
          {
            title: "Budite ljubazni prema drugim gostima", content: <>
              Malo ljubaznosti mnogo će značiti u građenju odnosa sa gostima, ali i osobljem. 
              Pobrinite se da vaš <b>pas ne skače na ljude i ne ometa</b> nikoga. Tako ćete pokazati da 
              ste odgovoran vlasnik ljubimca i bićete dobrodošli da ponovo dođete u bilo koje 
              doba dana.
            </>
          },
        ].map((tip, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image src={pawBullet} alt="Paw Bullet" width={24} height={24} className="mr-4" />
              <p className="font-semibold text-base sm:text-lg lg:text-2xl font-openSans">{tip.title}</p>
            </div>
            <p className="ml-10 text-base sm:text-lg lg:text-2xl font-openSans font-regular">{tip.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
