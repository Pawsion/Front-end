import React from 'react';
import Image from 'next/image';
import pawBullet from "../../../public/assets/images/Wash/pawBullet.png";

export default function SheltersTips() {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="lg:mb-10 lg:mt-10 mx-4 lg:mx-64">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold leading-relaxed mb-8">
          Evo nekoliko saveta kako da izbegnete da vaš ljubimac završi u prihvatilištu:
        </h2>
      </div>

      <ul className="text-base sm:text-lg lg:text-2xl font-openSans font-regular mt-8 mx-4 lg:mx-64 space-y-6 lg:pl-16">
        <li className="flex items-start mb-6">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span className="leading-relaxed">
            Uverite se da vaš ljubimac uvek nosi ogrlicu sa priveskom koja sadrži vaše ime,
            <span className="hidden sm:inline"><br /></span> adresu, broj telefona i ime vašeg ljubimca.
          </span>
        </li>
        <li className="flex items-start mb-6">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span className="leading-relaxed">
            Čipujte vaše ljubimce - ovaj mali čip sadrži jedinstveni identifikacioni broj koji može pomoći
            <span className="hidden sm:inline"><br /></span> službenicima da vas kontaktiraju ako pronađu vašeg ljubimca.
          </span>
        </li>
        <li className="flex items-start mb-6">
          <Image src={pawBullet} alt="Paw Bullet" className="w-5 h-5 mr-8 mt-3" />
          <span className="leading-relaxed">
            Koristite GPS ogrlice - uz pomoć ogrlice i aplikacije videćete na mapi gde se nalazi vaš pas.
          </span>
        </li>
      </ul>
    </div>
  );
}
