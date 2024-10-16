import React from 'react';
import { allNameLists } from '@/utils/names-data';
import { parseDescription } from "../../utils/parser";

const excludedTitles = ["Ženska imena za pse", "Muška imena za pse"];

interface NameListData {
  title: string;
  description: string;
  names?: string[];
  backgroundColor?: string; // Background color for the container
  maleNames?: string[];
  femaleNames?: string[];
}

const NamesList: React.FC = () => {
  return (
    <div>
      {allNameLists
        .filter((data) => !excludedTitles.includes(data.title))
        .map((data, index) => {
          const {
            title,
            description,
            maleNames = [],
            femaleNames = [],
          } = data as NameListData;

          return (
            <div key={index} className={`mb-8 ml-64`}>
              <h2 className="font-regular mb-4 mt-0">{title}</h2>
              <p className="mb-4 mt-16 text-2xl">{parseDescription(description)}</p>

              <div className="flex justify-center">
                <div className="w-1/2 pr-0 ml-64 mt-16 mb-16">
                  {maleNames.length > 0 && (
                    <div className={`bg-namesGreen p-4 max-w-[460px] max-h-[430px] flex flex-col items-center`}>
                      <h3 className="font-bold text-5xl mb-4 text-center text-namesFontGreen font-RobotoSlab">Muška imena</h3>
                      <div className="overflow-auto h-[350px] flex flex-col items-center">
                        <div className={`grid grid-cols-2 gap-4`}>
                          {maleNames.slice(0, 10).map((name, idx) => (
                            <div key={idx} className="flex items-center mb-2 justify-start">
                              <span className="mr-2 text-namesFontGreen text-2xl">•</span>
                              <span className="text-namesFontGreen text-3xl font-RobotoSlab font-bold">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-1/2 -ml-96 mt-16 mb-16">
                  {femaleNames.length > 0 && (
                    <div className={`bg-namesPink p-4 max-w-[460px] max-h-[430px] flex flex-col items-center`}>
                      <h3 className="font-bold text-5xl mb-4 text-center text-namesFontPink font-RobotoSlab">Ženska imena</h3>
                      <div className="overflow-auto h-[350px] flex flex-col items-center">
                        <div className={`grid grid-cols-2 gap-4`}>
                          {femaleNames.slice(0, 10).map((name, idx) => (
                            <div key={idx} className="flex items-center mb-2 justify-start">
                              <span className="mr-2 text-namesFontPink text-2xl">•</span>
                              <span className="text-namesFontPink text-3xl font-RobotoSlab font-bold">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default NamesList;
