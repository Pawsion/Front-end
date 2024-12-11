import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

const guidelines = [
  <>Psi treba da budu vakcinisani i zaštićeni od buva i krpelja.</>,
  <>Psi bi trebalo da budu sposobni da poslušaju osnovne komande.</>,
  <>Psi sa istorijom opasnog ponašanja prema ljudima ili drugim psima ne bi trebalo da se dovode u park.</>,
  <>Bolesni psi treba da ostanu kod kuće (zbog njihove i sigurnosti drugih pasa).</>,
  <>Ženke u teranju moraju ostati kod kuće.</>,
  <>Štenci mlađi od četiri meseca treba da ostanu kod kuće, jer još nisu primili sve vakcine, a lako mogu biti povređeni od drugih pasa.</>,
  <>Vlasnici ne bi trebalo da donose igračke ili hranu u park, jer to može izazvati konflikt između pasa.</>,
  <>Vlasnici bi trebalo da zatrpaju rupe koje je njihov pas iskopao.</>,
  <>Povoci treba da se koriste samo prilikom ulaska i izlaska iz parka - ali da budu pri ruci u svakom trenutku u slučaju potrebe.</>,
  <>Veoma mala i mala deca ne bi trebalo da se dovode u park za pse.</>,
  <>Izmet treba pokupiti i pravilno odbaciti. Ovo se odnosi i na drugi otpad.</>,
  <>Vlasnici treba da obraćaju pažnju na svog, ali i na druge pse. Nečešće sukobi izbijaju zbog nepažnje vlasnika.</>,
  <>Ako se pas udaljava, sklanja, krije, ili na bilo koji drugi način pokazuje da mu je nelagodno, vlasnik psa treba da reaguje i izdvoji svog psa.</>,
  <>Za prvu posetu parku, idite kada je manje gužve. Pustite psa da se navikne na novo okruženje.</>,
  <>Procenite ponašanje drugih pasa pre ulaska u park. Pozitivni znaci koje treba tražiti uključuju opušteno, veselo igranje i trčkaranje pasa.</>,
  <>Parkovi za pse nisu za svakog psa i zato ne očajavajte, već svom ljubimcu pronađite jednog ili dva drugara za igru na nekom mirnijem mestu poput dvorišta.</>
]; 

export default function ParkRules() {
  return (
    <div className="lg:w-3/4">
      <ul className="space-y-8 mt-16 text-base sm:text-lg lg:text-2xl font-openSans font-regular px-2">
        {guidelines.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex items-start justify-center mr-4 mt-2">
              <Image
                src={pawBullet}
                alt="Paw Bullet"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
            </div>
            <p className="flex-1">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}