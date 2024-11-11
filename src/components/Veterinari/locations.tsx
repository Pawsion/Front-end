"use client";
import { useState } from "react";
import { veterinariData } from "@/utils/veterinari-data";
import { veterinariDataRest } from "@/utils/veterinari-data-rest";
import { Veterinarian } from "@/utils/veterinari-data";
import SaloniCard from "../Saloni/saloniCard";

export default function Locations() {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [expandedCity, setExpandedCity] = useState<string | null>(null); // Track expanded city

  const normalizeCityNames = (data: { [city: string]: any }) => {
    const normalizedData: { [city: string]: any } = {};
    for (const city in data) {
      const normalizedCity = city.toLowerCase();
      normalizedData[normalizedCity] = data[city];
    }
    return normalizedData;
  };

  const addDefaultArea = (data: { [city: string]: any }) => {
    const updatedData: { [city: string]: any } = {};
    for (const city in data) {
      if (!data[city].default) {
        updatedData[city] = {
          default: data[city],
        };
      } else {
        updatedData[city] = data[city];
      }
    }
    return updatedData;
  };

  const normalizedVeterinariData = normalizeCityNames(veterinariData);
  const normalizedVeterinariDataRest = normalizeCityNames(veterinariDataRest);
  const updatedVeterinariDataRest = addDefaultArea(normalizedVeterinariDataRest);

  const combinedVeterinariData = {
    ...updatedVeterinariDataRest,
    ...normalizedVeterinariData,
  };

  const toggleCityDropdown = () => setIsCityDropdownOpen(!isCityDropdownOpen);

  const handleCitySelection = (e: React.MouseEvent, city: string) => {
    e.preventDefault();
    setSelectedCity(city);
    setSelectedArea(null);
    setExpandedCity(expandedCity === city ? null : city); // Toggle city expansion only for Beograd
    setIsCityDropdownOpen(false);
  };

  const handleAreaSelection = (e: React.MouseEvent, area: string) => {
    e.preventDefault();
    setSelectedArea(area);
  };

  const selectedCityData = selectedCity ? combinedVeterinariData[selectedCity] : null;
  const selectedAreaData =
    selectedCity && selectedArea && selectedCityData
      ? selectedCityData[selectedArea]
      : selectedCityData?.default;

  const sortedCities = Object.keys(combinedVeterinariData).sort((a, b) => {
    if (a.toLowerCase() === "beograd") return -1;
    if (b.toLowerCase() === "beograd") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="m-auto w-3/4 mt-32">
      <div className="space-y-20">
        <h2>Veterinarske ambulante</h2>

        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="relative inline-block text-left xl:w-[800px]">
              <button
                onClick={toggleCityDropdown}
                className={`inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-lg font-medium ${
                  !isCityDropdownOpen ? "text-inactive" : "text-gray-700"
                } hover:bg-gray-50`}
              >
                <span>{selectedCity || "Izaberite grad"}</span>
                <span className="text-mainColorBlue text-2xl">
                  {isCityDropdownOpen ? "▴" : "▾"}
                </span>
              </button>

              {isCityDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 max-h-60 overflow-y-auto">
                  <div className="py-2">
                    {sortedCities.map((city, index) => (
                      <a
                        key={index}
                        onClick={(e) => handleCitySelection(e, city)}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                        {combinedVeterinariData[city] &&
                          Object.keys(combinedVeterinariData[city]).length > 1 && (
                            <span className="ml-2 text-mainColorBlue text-2xl">
                              {expandedCity === city ? "▴" : "▾"}
                            </span>
                          )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="w-[400px]">
              <button
                onClick={() => {}}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Dežurni veterinari</span>
                <span className="text-mainColorBlue text-2xl"></span>
              </button>
            </div>
          </div>

          {selectedCity && selectedCityData && selectedCity in veterinariData && (
            <div className="mt-2 ml-4">
              <div className="space-y-2">
                {selectedCity === "beograd" && expandedCity === "beograd" && (
                  Object.keys(selectedCityData).map((area, index) => (
                    <a
                      key={index}
                      onClick={(e) => handleAreaSelection(e, area)}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {area}
                    </a>
                  ))
                )}

                {selectedCity !== "beograd" && selectedCityData?.default && (
                  <div className="block px-4 py-2 text-sm text-gray-700">
                    {selectedCityData.default}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {selectedCity && selectedAreaData && (
          <div className="mt-8">
            <h3>Veterinarske ambulante u {selectedArea || "default"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedAreaData.map((vet: Veterinarian, index: number) => (
                <SaloniCard
                  key={index}
                  name={vet.name}
                  site={vet.url}
                  address={vet.address}
                  phone={vet.phone}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
