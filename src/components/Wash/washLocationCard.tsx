import React from 'react';
import { WashLocationCardProps } from '../../../public/types/washCard';
import websiteIcon from '../../../public/assets/images/Wash/Website.png';
import phoneIcon from '../../../public/assets/images/Wash/Phone.png';
import locationIcon from '../../../public/assets/images/Wash/Location.png';

const WashLocationCard: React.FC<WashLocationCardProps> = ({ name, address, phone, website }) => {
  return (
    <div className="border-2 border-mainColorBlue rounded-[20px] sm:rounded-[30px] overflow-hidden w-full max-w-[350px] sm:max-w-[700px] h-[300px] sm:h-[400px] mb-8">
      <h3 className="text-[20px] sm:text-[30px] font-semibold bg-mainColorBlue text-white p-4 border-b border-gray-300">
        {name}
      </h3>
      <div className="p-4 sm:p-6">
        <div className="flex items-center mb-4">
          <img src={locationIcon.src} alt="Location" className="w-6 h-auto mr-4 sm:w-8 sm:h-auto" />
          <p className="text-xl sm:text-3xl font-semibold">{address}</p>
        </div>
        <div className="flex items-center mb-4">
          <img src={phoneIcon.src} alt="Phone" className="w-6 h-auto mr-4 sm:w-8 sm:h-auto" />
          <p className="text-xl sm:text-3xl font-semibold">{phone}</p>
        </div>
        <div className="flex items-center">
          <img src={websiteIcon.src} alt="Website" className="w-6 h-auto mr-4 sm:w-8 sm:h-auto" />
          <p className="text-xl sm:text-3xl font-semibold text-mainColorBlue">{website}</p>
        </div>
      </div>
    </div>
  );
};

export default WashLocationCard;
