import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function SheltersTips() {
  return (
    <div className="ml-4 -mt-16">
    <div className="ml-64 text-2xl font-openSans font-regular">
      <p className="mb-16">Evo nekoliko saveta kako da izbegnete da vaš ljubimac završi u prihvatilištu:</p>
      <ul className="ml-16">
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span>Uverite se da vaš ljubimac uvek nosi ogrlicu sa priveskom koja sadrži vaše ime,<br /> adresu, broj telefona
           i ime vašeg ljubimca.</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span>Čipujte vaše ljubimce - ovaj mali čip sadrži jedinstveni identifikacioni broj koji može pomoći<br /> službenicima da vas kontaktiraju ako pronađu vašeg ljubimca.</span>
        </li>
        <li className="flex items-start mb-8">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span>Koristite GPS ogrlice - uz pomoć ogrlice i aplikacije videćete na mapi gde se nalazi vaš pas.</span>
        </li>
      </ul>
    </div>
    </div>
  );
}
