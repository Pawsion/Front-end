import React from 'react';
import { allNameLists } from '@/utils/names-data';

const excludedTitles = ["Ženska imena za pse", "Muška imena za pse"];

interface NameListData {
  title: string;
  description: string;
  names?: string[];
  backgroundColor?: string;
  nameColor?: string;
  maleNames?: string[];
  femaleNames?: string[];
}

const NamesList: React.FC = () => {
  return (
    <div className="p-8">
      {allNameLists
        .filter((data) => !excludedTitles.includes(data.title))
        .map((data, index) => {
          const {
            title,
            description,
            names = [],
            backgroundColor = 'bg-white',
            nameColor = 'text-black',
            maleNames = [],
            femaleNames = [],
          } = data as NameListData; // Cast to handle optional properties

          return (
            <div key={index} className={`mb-8 ${backgroundColor}`}>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="mb-4">{description}</p>
              <div className={`grid grid-cols-2 gap-4 ${nameColor}`}>
                {names.map((name, idx) => (
                  <span key={idx} className="block">{name}</span>
                ))}
                {maleNames.map((name, idx) => (
                  <span key={idx} className="block">{name}</span>
                ))}
                {femaleNames.map((name, idx) => (
                  <span key={idx} className="block">{name}</span>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NamesList;
