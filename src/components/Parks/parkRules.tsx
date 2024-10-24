import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

const guidelines = [
  <>Psi treba da budu vakcinisani i zaštićeni od buva i krpelja.</>,
  <>Psi bi trebalo da budu sposobni da poslušaju osnovne komande.</>,
  <>Psi sa istorijom opasnog ponašanja prema ljudima ili drugim psima ne bi trebalo da se dovode u<br /> park.</>,
  <>Bolesni psi treba da ostanu kod kuće (zbog njihove i sigurnosti drugih pasa).</>,
  <>Ženke u teranju moraju ostati kod kuće.</>,
  <>Štenci mlađi od četiri meseca treba da ostanu kod kuće, jer još nisu primili sve vakcine, a lako mogu<br /> biti povređeni od drugih pasa.</>,
  <>Vlasnici ne bi trebalo da donose igračke ili hranu u park, jer to može izazvati konflikt između pasa.</>,
  <>Vlasnici bi trebalo da zatrpaju rupe koje je njihov pas iskopao.</>,
  <>Povoci treba da se koriste samo prilikom ulaska i izlaska iz parka - ali da budu pri ruci u svakom<br /> trenutku u slučaju potrebe.</>,
  <>Veoma mala i mala deca ne bi trebalo da se dovode u park za pse.</>,
  <>Izmet treba pokupiti i pravilno odbaciti. Ovo se odnosi i na drugi otpad.</>,
  <>Vlasnici treba da obraćaju pažnju na svog, ali i na druge pse. Nečešće sukobi izbijaju zbog nepažnje<br /> vlasnika.</>,
  <>Ako se pas udaljava, sklanja, krije, ili na bilo koji drugi način pokazuje da mu je nelagodno, vlasnik psa<br /> treba da reaguje i izdvoji svog psa.</>,
  <>Za prvu posetu parku, idite kada je manje gužve. Pustite psa da se navikne na novo okruženje.</>,
  <>Procenite ponašanje drugih pasa pre ulaska u park. Pozitivni znaci koje treba tražiti uključuju<br /> opušteno, veselo igranje i trčkaranje pasa.</>,
  <>Parkovi za pse nisu za svakog psa i zato ne očajavajte, već svom ljubimcu pronađite jednog ili dva<br /> drugara za igru na nekom mirnijem mestu poput dvorišta.</>
];

export default function ParkRules() {
  return (
    <div>
      <ul className="space-y-8 text-2xl leading-10 font-openSans">
        {guidelines.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-8 mt-3">
              <Image
                src={pawBullet}
                alt="Paw Bullet"
                width={18}
                height={21}
              />
            </div>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
