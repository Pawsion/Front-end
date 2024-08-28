import React from 'react';
import { WashLocationCardProps } from '../../../public/types/washCard';
import websiteIcon from '../../../public/assets/images/Wash/Website.png';
import phoneIcon from '../../../public/assets/images/Wash/Phone.png';
import locationIcon from '../../../public/assets/images/Wash/Location.png';

const WashLocationCard: React.FC<WashLocationCardProps> = ({ name, address, phone, website }) => {
    return (
      <div className="border-2 border-mainColorBlue rounded-[30px] overflow-hidden w-[700px] h-[400px]">
        <h3 className="text-[36px] font-semibold bg-mainColorBlue text-white p-4 border-b border-gray-300">
          {name}
        </h3>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img src={locationIcon.src} alt="Location" className="w-8 h-auto mr-8 ml-6 mt-4" />
            <p className="text-[32px] font-semibold mt-4">{address}</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={phoneIcon.src} alt="Phone" className="w-8 h-auto mr-8 ml-6 mt-4" />
            <p className="text-[32px] font-semibold mt-4">{phone}</p>
          </div>
          <div className="flex items-center">
            <img src={websiteIcon.src} alt="Website" className="w-8 h-auto mr-8 ml-6 mt-4" />
            <a href={website} className="text-mainColorBlue text-[32px] font-semibold hover:underline mt-4">{website}</a>
          </div>
        </div>
      </div>
    );
}

export default WashLocationCard;
