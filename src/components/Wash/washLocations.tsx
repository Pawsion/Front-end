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
    <div className="mb-32 ml-64 text-2xl font-openSans font-regular">
      <h2 className="mb-16">Samouslužne perionice</h2>
      <ol className="list-decimal ml-8 text-mainColorBlue">
        <li className="mb-4">
          <a href="#beograd" className="hover:underline">Samouslužne perionice za pse Beograd</a>
        </li>
        <li className="mb-4">
          <a href="#novi-sad" className="hover:underline">Samouslužne perionice za pse Novi Sad</a>
        </li>
        <li className="mb-4">
          <a href="#nis" className="hover:underline">Samouslužne perionice za pse Niš</a>
        </li>
        <li className="mb-4">
          <a href="#subotica" className="hover:underline">Samouslužne perionice za pse Subotica</a>
        </li>
        <li>
          <a href="#kragujevac" className="hover:underline">Samouslužne perionice za pse Kragujevac</a>
        </li>
      </ol>

      <div id="beograd" className="mt-16">
        <h2 className="mb-16">Samouslužne perionice za pse Beograd</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderWashCards('beograd')}
        </div>
      </div>

      <div id="novi-sad" className="mt-16">
        <h2 className="mb-16">Samouslužne perionice za pse Novi Sad</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderWashCards('noviSad')}
        </div>
      </div>

      <div id="nis" className="mt-16">
        <h2 className="mb-16">Samouslužne perionice za pse Niš</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderWashCards('nis')}
        </div>
      </div>

      <div id="subotica" className="mt-16">
        <h2 className="mb-16">Samouslužne perionice za pse Subotica</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderWashCards('subotica')}
        </div>
      </div>

      <div id="kragujevac" className="mt-16">
        <h2 className="mb-16">Samouslužne perionice za pse Kragujevac</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {renderWashCards('kragujevac')}
        </div>
      </div>
    </div>
  );
}
