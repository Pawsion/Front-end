import React from 'react';
import Image from 'next/image';
import contentImage from "../../../public/assets/images/Shelters/dogInBox.png";
import { parseDescription } from "../../utils/parser";

const content = [
  "Mi kažemo naravno, zašto da ne! To što su u prihvatilištu ne znači da manje vrede i da ne mogu voditi normalan život ukoliko im ponudite ljubav i pažnju.",
  "Mnogi ljudi žive u zabludi da će u prihvatilištu pronaći samo „mešance“, međutim to nije slučaj i čak oko petine pasa su rasni. Ukoliko ste planirali da odete do odgajivačnice, eto prilike da uštedite ukoliko udomite psa. Druga zabluda je da prihvatilišta smeštaju samo starije životinje, a u stvarnosti tu se nalazi mnogo štenaca i mlađih pasa koje možete socijalizovati u skladu sa vašim životom.",
  "Ukoliko želite da udomite psa iz azila, odnosno prihvatilišta, uvek sa zaposlenima možete razgovarati o njegovom karakteru, potrebama, zdravstvenom stanju i sličnih stvarima koje će vam olakšati odabir.",
  "Dobro razmislite da li ćete udomiti odraslog psa ili štene, jer razlika definitivno postoji. Za štene će vam u početku trebati mnogo više vremena, a važno je da ga pravilno socijalizujete i naučite da obavlja nuždu napolju.",
  "Kada preuzmete psa iz prihvatilišta, odnosno azila, on će verovatno već biti očišćen od parazita i vakcinisan, ali svakako ga prvo odvedite kod veterinara. To je posebno važno ako kući imate još ljubimaca.",
  "Naredni korak je privikavanje ljubimca na novu sredinu, tj. na vaš dom. Psi koji su živeli na ulici ili u prihvatilištu, nešto se teže privikavaju na novi dom. Naravno, to u velikoj meri zavisi od njihove prošlosti. Ukoliko su ih ljudi zlostavljali, trebaće vam određeno vreme kako bi pas počeo da vam veruje i oseća se prijatno u svom novom domu. Imajte strpljenja i pravite korak po korak.",
  "Želimo vam svu sreću u pronalaženju i udomljavanju ljubimca, a nikada nemojte zaboraviti da ste jednim humanim delom ulepšali, a verovatno i spasili život vašem novom prijatelju."
];

export default function SheltersContent() {
  return (
    <div className="relative flex flex-col items-start p-4 lg:w-3/4">
      <div className="lg:mb-10 lg:mt-10 mx-4 lg:mx-64">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold leading-relaxed">
          Da li da udomim psa iz prihvatilišta?
        </h2>
      </div>

      <div className="text-base sm:text-lg lg:text-2xl font-openSans font-regular mt-8 mx-4 lg:mx-64">
        {content.slice(0, 4).map((paragraph, index) => (
          <p key={index} className="mb-8 leading-relaxed">{parseDescription(paragraph)}</p>
        ))}

        <div className="relative w-full sm:h-[400px] lg:h-[740px] mt-4 mb-4">
          <div className="relative h-full">
            <Image
              src={contentImage}
              alt="Dog in box"
              layout="responsive"
              width={1440}
              height={740}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        {content.slice(4).map((paragraph, index) => (
          <p key={index} className="mb-8 leading-relaxed">{parseDescription(paragraph)}</p>
        ))}
      </div>
    </div>
  );
}
