import React from 'react';
import { allNameLists } from '@/utils/names-data';
import { parseDescription } from "../../utils/parser";

const excludedTitles = ["Ženska imena za pse", "Muška imena za pse"];

interface NameListData {
  title: string;
  description: string;
  names?: string[];
  backgroundColor?: string;
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
            <div key={index} className="mb-16 px-4 lg:ml-64">
              <h2 className="font-openSans font-bold text-fontColorBlack text-left mb-4 lg:mb-16">
                {title}
              </h2>

              <p className="lg:mb-8 text-base sm:text-lg lg:text-2xl font-openSans leading-[1.75]">
                {parseDescription(description)}
              </p>

              <div className="flex justify-center gap-4">
                <div className="w-[48%] max-w-[460px] mt-16 mb-16">
                  {maleNames.length > 0 && (
                    <div className="bg-namesGreen xl:p-4 p-2 max-h-[430px] flex flex-col items-center">
                      <h3 className="font-bold mb-4 text-center text-namesFontGreen font-RobotoSlab">
                        Muška imena
                      </h3>
                      <div className="overflow-auto h-auto flex flex-col items-center">
                        <div className="grid grid-cols-2 xl:gap-4 gap-2">
                          {maleNames.slice(0, 10).map((name, idx) => (
                            <div key={idx} className="flex items-center mb-2 justify-start">
                              <p className="mr-2 text-namesFontGreen">•</p>
                              <p className="text-namesFontGreen font-RobotoSlab font-bold">
                                {name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-[48%] max-w-[460px] mt-16 mb-16">
                  {femaleNames.length > 0 && (
                    <div className="bg-namesPink xl:p-4 p-2 max-h-[430px] flex flex-col items-center">
                      <h3 className="font-bold mb-4 text-center text-namesFontPink font-RobotoSlab">
                        Ženska imena
                      </h3>
                      <div className="overflow-auto h-auto flex flex-col items-center">
                        <div className="grid grid-cols-2 xl:gap-4 gap-2">
                          {femaleNames.slice(0, 10).map((name, idx) => (
                            <div key={idx} className="flex items-center mb-2 justify-start">
                              <p className="xl:mr-2 mr-1 text-namesFontPink ">•</p>
                              <p className="text-namesFontPink font-RobotoSlab font-bold">
                                {name}
                              </p>
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
