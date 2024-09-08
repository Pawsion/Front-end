import React from 'react';
import { femaleDogNames, maleDogNames, NameListData } from '@/utils/names-data';

type Props = {
  listData: NameListData;
};

const NameListComponent: React.FC<Props> = ({ listData }) => {
  return (
    <div className="mb-32 ml-64 mt-16">
      <div className="p-4">
        <h2 className="text-[64px] font-regular text-fontColorBlack text-left leading-none mb-24">{listData.title}</h2>
        <p className="mt-2">{listData.description}</p>
        <div className="max-w-[1200px] max-h-[400px] overflow-auto">
          <ul className="mt-4 grid grid-cols-5">
            {listData.names.map((name, index) => (
              <li 
                key={index} 
                className={`text-[38px] ${listData.nameColor} ${listData.backgroundColor}`}
                style={{ backgroundColor: listData.backgroundColor }}
              >
                {name}
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
