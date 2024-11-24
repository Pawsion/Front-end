import React from 'react';
import { SHELTERS_LOCATIONS } from '@/utils/shelterLocations-data';
import SaloniCard from '../Saloni/saloniCard';

const SheltersLocations: React.FC = () => {
  const renderShelters = (city: string, data: any[]) => (
    <div className="mb-16">
      <h3 className="text-3xl sm:text-4xl lg:text-6xl font-RobotoSlab text-left leading-none mb-4">
        Azili i prihvatilišta za pse u {city}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {data.map((shelter, index) => (
          <SaloniCard
            key={index}
            name={shelter.name}
            site={shelter.site}
            address={shelter.address}
            phone={shelter.phone}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mx-4 sm:mx-8 lg:mx-64">
        {renderShelters('Beogradu', SHELTERS_LOCATIONS.beograd)}
        {renderShelters('Novom Sadu', SHELTERS_LOCATIONS.noviSad)}
        {renderShelters('Nišu', SHELTERS_LOCATIONS.nis)}
        {renderShelters('Kragujevcu', SHELTERS_LOCATIONS.kragujevac)}
        {renderShelters('Kruševcu', SHELTERS_LOCATIONS.krusevac)}
        {renderShelters('Subotici', SHELTERS_LOCATIONS.subotica)}
        {renderShelters('Zrenjaninu', SHELTERS_LOCATIONS.zrenjanin)}
        {renderShelters('Čačku', SHELTERS_LOCATIONS.cacak)}
        {renderShelters('Jagodini', SHELTERS_LOCATIONS.jagodina)}
        {renderShelters('Kraljevu', SHELTERS_LOCATIONS.kraljevo)}
        {renderShelters('Sremskoj Mitrovici', SHELTERS_LOCATIONS.sremskaMitrovica)}
        {renderShelters('Pančevu', SHELTERS_LOCATIONS.pancevo)}
      </div>
    </div>
  );
};

export default SheltersLocations;
