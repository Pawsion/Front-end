import React from "react";
import img from "@/../public/assets/images/Veterinari/Veterinari.png";
import Image from "next/image";

export default function Tips() {
  return (
    <div className="xl:text-2xl mt-16">
      <div className="m-auto w-3/4 space-y-10">
        <ul className="list-disc space-y-16 xl:ml-32">
          <li>
          Raspitajte se među porodicom i prijateljima da li su imali dobra iskustva sa svojim veterinarima
          </li>
          <li>
          Možete otići i do lokalnog parka za pse, pa na tu temu popričati sa ostalim vlasnicima pasa
          </li>
          <li>
            Najbolje bi bilo da pronađete veterinara pre nego što vam zatreba, tj. pre nego što dovedete psa<br />
            kući. Ovo se odnosi i na slučaj selidbe, jer dovoljno je stresno što vam je ljubimac bolestan ili<br />
            povređen nego još morate i brzo pronaći veterinara u nedovoljno poznatom kraju.
          </li>
          <li>
          Pretražite lokalne veb-forume i grupe na društvenim mrežama
          </li>

          <li>
          Ukoliko ste psa kupili u uzgajivačnici možete i njih pitati za savet
          </li>

          <li>
          Ako ste usvojili svog ljubimca iz prihvatilišta, verovatno vam i oni mogu dati preporuke. Neka<br />
          prihvatilišta i organizacije za spasavanje imaju partnerstva sa lokalnim veterinarima
          </li>
            
            
          <div className="xl:w-[1441px] h-auto">
            <Image
             className="!mb-32 -ml-32 object-cover w-full h-full"
             alt="Dog image"
             src={img}
             />
          </div>

          <li>
          Profesionalci koji rade sa kućnim ljubimcima, frizeri, treneri, šetači i čuvari pasa, takođe mogu imati<br />
          iskustva sa veterinarima u vašem području.
          </li>

          <li>
          Razmotrite i udaljenost ordinacije od vašeg doma. Ukoliko vaš ljubimac ne voli duge vožnje<br />
          automobilom, možda ćete želeti da pronađete ordinaciju koja je blizu.
          </li>

          <li>
          Kada suzite izbor na nekoliko ambulanti, nije na odmet da pročitate Gugl recenzije korisnika pre<br />
          nego što zakažete pregled.
          </li>


          <li>
          Imajte na umu da cene usluga veterinarskih ambulanti variraju i da ponekad najskuplje ne znači i najbolje.
          </li>

          <li>
          Kada konačno odete kod veterinara, obratite pažnju da li se pas prijatno oseća i kako veterinar<br />
          tretira vašeg ljubimca. Ukoliko niste zadovoljni uslugom ili primetite da vašem psu jednostavno nije<br />
          ugodno, uvek možete potražiti novu ambulantu.
          </li>

        </ul>
      </div>
    </div>
  );
}
