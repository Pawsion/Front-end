import React from 'react';
import { femaleDogNames, maleDogNames, NameListData } from '@/utils/names-data';
import { parseDescription } from "../../utils/parser";

const femaleImages = [
  '/assets/images/Names/1.png',
  '/assets/images/Names/2.png',
  '/assets/images/Names/3.png',
  '/assets/images/Names/4.png',
  '/assets/images/Names/5.png',
  '/assets/images/Names/6.png',
];

const maleImages = [
  '/assets/images/Names/7.png',
  '/assets/images/Names/8.png',
  '/assets/images/Names/9.png',
  '/assets/images/Names/10.png',
  '/assets/images/Names/11.png',
  '/assets/images/Names/12.png',
];

type Props = {
  listData: NameListData;
};

const NameListComponent: React.FC<Props> = ({ listData }) => {
  return (
    <div>
      <div className="mb-16 px-4 lg:ml-64 text-base sm:text-lg lg:text-2xl font-openSans font-regular">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-regular text-fontColorBlack text-left mb-8 lg:mb-16">
          {listData.title}
        </h2>
        <p className="mb-6 lg:mb-8 leading-relaxed">{parseDescription(listData.description)}</p>
      </div>
      
      <div className={`mt-24 ${listData.backgroundColor} px-4 mx-auto max-w-[1200px] max-h-[350px] lg:h-[350px] relative`}>
        <ul className="grid grid-cols-5 gap-4">
          {listData.names.map((name, index) => (
            <li
              key={index}
              className={`lg:text-[38px] ${listData.nameColor} px-4 py-2 font-RobotoSlab font-semibold relative lg:mt-16 lg:ml-4`}
            >
              {name}

              {listData === femaleDogNames && index < femaleImages.length && (
                <img
                  src={femaleImages[index]}
                  alt={`Female Dog Name Image ${index + 1}`}
                  className="absolute"
                  style={{
                    top: index % 2 === 0 ? '-20px' : 'calc(100% - 80px)',
                    left: `calc(50% - 60px + ${index * 15}px)`,
                  }}
                />
              )}

              {listData === maleDogNames && index < maleImages.length && (
                <img
                  src={maleImages[index]}
                  alt={`Male Dog Name Image ${index + 7}`}
                  className="absolute"
                  style={{
                    top: index % 2 === 0 ? '-20px' : 'calc(100% - 80px)',
                    left: `calc(50% - 60px + ${index * 15}px)`,
                  }}
                />
              )}
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
