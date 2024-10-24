import React from 'react';
import Image from 'next/image';
import contentImage from "../../../public/assets/images/Shelters/dogInBox.png";
import { parseDescription } from "../../utils/parser";

const content = [
  "Mi kažemo naravno, zašto da ne! To što su u prihvatilištu ne znači da manje vrede i da ne mogu voditi[br] normalan život ukoliko im ponudite ljubav i pažnju.",
  "Mnogi ljudi žive u zabludi da će u prihvatilištu pronaći samo „mešance“, međutim to nije slučaj i čak oko petine[br] pasa su rasni. Ukoliko ste planirali da odete do odgajivačnice, eto prilike da uštedite ukoliko udomite psa.[br] Druga zabluda je da prihvatilišta smeštaju samo starije životinje, a u stvarnosti tu se nalazi mnogo štenaca i[br] mlađih pasa koje možete socijalizovati u skladu sa vašim životom.",
  "Ukoliko želite da udomite psa iz azila, odnosno prihvatilišta, uvek sa zaposlenima možete razgovarati o[br] njegovom karakteru, potrebama, zdravstvenom stanju i sličnih stvarima koje će vam olakšati odabir.",
  "Dobro razmislite da li ćete udomiti odraslog psa ili štene, jer razlika definitivno postoji. Za štene će vam u[br] početku trebati mnogo više vremena, a važno je da ga pravilno socijalizujete i naučite da obavlja nuždu[br] napolju.",
  "Kada preuzmete psa iz prihvatilišta, odnosno azila, on će verovatno već biti očišćen od parazita i vakcinisan, ali[br] svakako ga prvo odvedite kod veterinara. To je posebno važno ako kući imate još ljubimaca.",
  "Naredni korak je privikavanje ljubimca na novu sredinu, tj. na vaš dom. Psi koji su živeli na ulici ili u[br] prihvatilištu, nešto se teže privikavaju na novi dom. Naravno, to u velikoj meri zavisi od njihove prošlosti.[br] Ukoliko su ih ljudi zlostavljali, trebaće vam određeno vreme kako bi pas počeo da vam veruje i oseća se[br] prijatno u svom novom domu. Imajte strpljenja i pravite korak po korak.",
  "Želimo vam svu sreću u pronalaženju i udomljavanju ljubimca, a nikada nemojte zaboraviti da ste jednim[br] humanim delom ulepšali, a verovatno i spasili život vašem novom prijatelju."
];

export default function SheltersContent() {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mb-16 ml-64 mt-16">
        <h2>
          Da li da udomim psa iz prihvatilišta?
        </h2>
      </div>
      <div className="text-[28px] font-openSans font-regular mt-8 ml-64">
        {content.slice(0, 4).map((paragraph, index) => (
          <p key={index} className="mb-16">{parseDescription(paragraph)}</p>
        ))}
        <div className="relative w-[1440px] mt-2">
          <div className="relative h-[740px]">
            <Image
              src={contentImage}
              alt="Dog in box"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        {content.slice(4).map((paragraph, index) => (
          <p key={index} className="mb-16">{parseDescription(paragraph)}</p>
        ))}
      </div>
    </div>
  );
}
