import React from 'react';
import WashLocationCard from './washLocationCard';
import { washLocationsData } from '@/utils/washLocations-data';

export default function WashLocations() {
  const renderWashCards = (city: string) => {
    return washLocationsData[city].map((location, index) => (
      <WashLocationCard
        key={index}
        name={location.name}
        address={location.address}
        phone={location.phone}
        website={location.website}
      />
    ));
  };

  return (
    <div className="relative mb-32 mt-16 text-base sm:text-lg lg:text-2xl font-openSans font-regular lg:ml-64 px-4">
      <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
        Samouslužne perionice
      </h2>
      <ol className="list-decimal ml-4 sm:ml-8 lg:ml-0 text-mainColorBlue space-y-4 sm:space-y-6 lg:space-y-8 lg:px-6">
        <li>
          <a href="#beograd" className="hover:underline">Samouslužne perionice za pse Beograd</a>
        </li>
        <li>
          <a href="#novi-sad" className="hover:underline">Samouslužne perionice za pse Novi Sad</a>
        </li>
        <li>
          <a href="#nis" className="hover:underline">Samouslužne perionice za pse Niš</a>
        </li>
        <li>
          <a href="#subotica" className="hover:underline">Samouslužne perionice za pse Subotica</a>
        </li>
        <li>
          <a href="#kragujevac" className="hover:underline">Samouslužne perionice za pse Kragujevac</a>
        </li>
      </ol>

      <div id="beograd" className="mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
          Samouslužne perionice za pse Beograd
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {renderWashCards('beograd')}
        </div>
      </div>

      <div id="novi-sad" className="mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
          Samouslužne perionice za pse Novi Sad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {renderWashCards('noviSad')}
        </div>
      </div>

      <div id="nis" className="mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
          Samouslužne perionice za pse Niš
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {renderWashCards('nis')}
        </div>
      </div>

      <div id="subotica" className="mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
          Samouslužne perionice za pse Subotica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {renderWashCards('subotica')}
        </div>
      </div>

      <div id="kragujevac" className="mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-3xl sm:text-2xl lg:text-4xl font-RobotSlab mb-8">
          Samouslužne perionice za pse Kragujevac
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {renderWashCards('kragujevac')}
        </div>
      </div>
    </div>
  );
}
