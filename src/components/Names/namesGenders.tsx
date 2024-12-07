import React from 'react';
import { femaleDogNames, maleDogNames, NameListData } from '@/utils/names-data';
import { parseDescription } from "../../utils/parser";

type Props = {
  listData: NameListData;
};

const NameListComponent: React.FC<Props> = ({ listData }) => {
  return (
    <div>
      <div className="xl:mb-8 px-4 lg:ml-64 text-base sm:text-lg lg:text-2xl font-openSans font-regular">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-fontColorBlack text-left mb-4 lg:mb-16">
          {listData.title}
        </h2>
        <p className="mb-6 lg:mb-8 leading-relaxed">{parseDescription(listData.description)}</p>
      </div>
      
      <div
        className={`
          lg:mt-24 mt-4 mb-8
          sm:px-0 lg:px-4 
          mx-auto 
          max-w-[1200px] 
          max-h-[350px] lg:h-[350px] 
          relative 
          flex items-center justify-center
        `}
        style={{
          backgroundImage: `url(${listData === femaleDogNames ? '/assets/images/Names/female.svg' : '/assets/images/Names/male.svg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <ul className="grid grid-cols-5 gap-4 text-center w-full">
          {listData.names.map((name, index) => (
            <li
              key={index}
              className={`
                lg:text-[38px] 
                ${listData.nameColor} 
                px-4 py-2 
                font-RobotoSlab font-semibold
              `}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DogNamesDisplay: React.FC = () => {
  return (
    <div>
      <NameListComponent listData={femaleDogNames} />
      <NameListComponent listData={maleDogNames} />
    </div>
  );
};

export default DogNamesDisplay;
