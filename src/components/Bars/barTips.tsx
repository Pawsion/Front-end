import React from "react";
import Image from "next/image";
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function BarTips() {
  return (
    <div className="relative mb-16 -mt-8 text-base sm:text-lg lg:text-2xl font-openSans font-regular">
      <ul className="lg:space-y-16 space-y-8">
        {[
          {
            title: "Pronađite mirno mesto", content: <>Restoran može biti stimulativno okruženje sa mnogo distrakcija za psa. To može izazvati<span className="hidden sm:inline"><br /></span>
              previše uzbuđenja za vašeg psa, što nije ono što želite, zato potražite sto u mirnom kutku<span className="hidden sm:inline"><br /></span>
              daleko od drugih gostiju. Takođe obratite pažnju da vaš pas ne ometa druge goste ili<span className="hidden sm:inline"><br /></span>
              konobare.</>
          },
          {
            title: "Držite ih na povocu", content: (
              <>
                Bez obzira koliko je dobro obučen pas i sluša komande, naročito onu da dođe do vas, <b>uvek ga<span className="hidden sm:inline"><br /></span>
                  držite na povocu.</b> Na taj način ćete osigurati <b>bezbednost gostiju, ali i vašeg psa</b>, jer nikad ne<span className="hidden sm:inline"><br /></span>
                znate kako će ko da reaguje.<span className="hidden sm:inline"><br /></span><span className="hidden sm:inline"><br /></span><span className="hidden sm:inline"><br /></span>
                Roditelji su posebno zaštitnički nastrojeni prema maloj deci, čak iako je vaš pas samo hteo da<span className="hidden sm:inline"><br /></span>
                se igra. Ne dozvolite da bespotrebno upadate u neprijatne situacije i tako upropastite izlazak<span className="hidden sm:inline"><br /></span>
                sebi i drugima.
                <b>Bonus savet:</b><i> Ne vezujte povodac za stolove, stolice ili drugi restoranski inventar -<span className="hidden sm:inline"><br /></span>
                  ukoliko vaš pas odluči da potrči, može napraviti ozbiljnu štetu, a potencijalno i haos u restoranu.</i>
              </>
            )
          },
          {
            title: "Ne dozvolite im da prose za hranu", content: <>
              Možda mislite da je vaš pas jednostavno očaravajući kada prosi za hranu, ali drugi<span className="hidden sm:inline"><br /></span>
              gosti možda neće imati isti stav. Istrenirajte psa tako da razume da prosjačenje<span className="hidden sm:inline"><br /></span>
              neće dovesti do toga da dobije ono što želi.</>
          },
          {
            title: "Držite ih dalje od hrane", content: <>
              Nemojte tražiti od svog psa da vam sedne u krilo ili na stolicu pored vas. Ovo ne samo što je<span className="hidden sm:inline"><br /></span>
              najverovatnije protiv politike restorana, već ćete omogućiti da mu hrana sa stola bude lako<span className="hidden sm:inline"><br /></span>
              dostupna.
            </>
          },
          {
            title: "Sprečite neprekidno lajanje", content: <>
              Neprekidno lajanje je siguran način da iznervirate druge goste, a može se desiti da vas osoblje<span className="hidden sm:inline"><br /></span>
              čak i zamoli da napustite restoran. Možda ne bi bilo loše da svom psu ponesete igračku ili<span className="hidden sm:inline"><br /></span>
              neku drugu zanimaciju.
            </>
          },
          {
            title: "Budite ljubazni prema drugim gostima", content: <>
              Malo ljubaznosti mnogo će značiti u građenju odnosa sa gostima, ali i osobljem.<span className="hidden sm:inline"><br /></span>
              Pobrinite se da vaš <b>pas ne skače na ljude i ne ometa</b> nikoga. Tako ćete pokazati da<span className="hidden sm:inline"><br /></span>
              ste odgovoran vlasnik ljubimca i bićete dobrodošli da ponovo dođete u bilo koje<span className="hidden sm:inline"><br /></span>
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
