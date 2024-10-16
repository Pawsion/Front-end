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
    <div className="mb-32 ml-64 mt-16">
      <div>
        <h2 className="font-regular text-fontColorBlack text-left leading-none mb-24">
          {listData.title}
        </h2>
        <p className="mt-2 text-2xl">{parseDescription(listData.description)}</p>
        <div className={`w-[1200px] h-[350px] overflow-auto flex items-center justify-center ml-32 mt-24 ${listData.backgroundColor}`}>
          <ul className="grid grid-cols-5 mb-4 text-left relative">
            {listData.names.map((name, index) => (
              <li 
                key={index} 
                className={`text-[38px] ${listData.nameColor} px-12 py-4 font-RobotoSlab font-semibold relative`}
              >
                {name}
                {listData === femaleDogNames && index < femaleImages.length && (
                  <img 
                    src={femaleImages[index]} 
                    alt={`Female Dog Name Image ${index + 1}`} 
                    className="absolute"
                    style={{
                      top: index % 2 === 0 ? '-20px' : '80px',
                      left: 'calc(-50% + 20px * ' + index + ')',
                    }}
                  />
                )}
                {listData === maleDogNames && index < maleImages.length && (
                  <img 
                    src={maleImages[index]} 
                    alt={`Male Dog Name Image ${index + 7}`}
                    className="absolute"
                    style={{
                      top: index % 2 === 0 ? '-20px' : '80px',
                      left: 'calc(-50% + 20px * ' + index + ')',
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
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
