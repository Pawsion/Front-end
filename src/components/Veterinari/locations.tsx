"use client";
import { useState } from "react";
import { veterinariData } from "@/utils/veterinari-data";
import { veterinariDataRest } from "@/utils/veterinari-data-rest";
import { Veterinarian } from "@/utils/veterinari-data";
import SaloniCard from "../Saloni/saloniCard";

export default function Locations() {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [expandedCity, setExpandedCity] = useState<string | null>(null);
  const [showVeterinarians, setShowVeterinarians] = useState(false);

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

  const handleCitySelection = (e: React.ChangeEvent<HTMLInputElement>, city: string) => {
    const isChecked = e.target.checked;

    if (city === "beograd") {
      setExpandedCity(isChecked ? "beograd" : null);
    }

    if (isChecked) {
      setSelectedCity((prevCity) => (prevCity ? prevCity + ", " + city : city));
    } else {
      setSelectedCity((prevCity) =>
        prevCity?.split(", ").filter((selected) => selected !== city).join(", ") || null
      );
    }
    setSelectedAreas([]);
  };

  const handleAreaSelection = (e: React.ChangeEvent<HTMLInputElement>, area: string) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedAreas((prevAreas) => [...prevAreas, area]);
    } else {
      setSelectedAreas((prevAreas) => prevAreas.filter((selected) => selected !== area));
    }
  };

  const sortedCities = Object.keys(combinedVeterinariData).sort((a, b) => {
    if (a.toLowerCase() === "beograd") return -1;
    if (b.toLowerCase() === "beograd") return 1;
    return a.localeCompare(b);
  });

  const handleShowVeterinarians = () => {
    setShowVeterinarians(true);
  };

  return (
    <div className="m-auto w-3/4 mt-32">
      <div className="space-y-20">
        <h2>Veterinarske ambulante</h2>

        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="relative inline-block text-left xl:w-[800px]">
              <button
                onClick={toggleCityDropdown}
                className={`inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 text-fontColorGray bg-white text-lg font-medium ${!isCityDropdownOpen ? "text-inactive" : "text-gray-700"} hover:bg-gray-50`}
              >
                <span className="text-2xl">{selectedCity || "Izaberite grad"}</span>
                <span className="text-mainColorBlue text-2xl">
                  {isCityDropdownOpen ? "▴" : "▾"}
                </span>
              </button>
              {isCityDropdownOpen && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-96 text-fontColorGray flex flex-col city-dropdown-scroll">
                  <div className="py-2 flex-1">
                    {sortedCities.map((city, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between px-4 py-2 text-2xl text-fontColorGray">
                          <span
                            onClick={() => handleCitySelection({ target: { checked: !selectedCity?.includes(city) } } as any, city)}
                            className="cursor-pointer"
                          >
                            {city.charAt(0).toUpperCase() + city.slice(1)}
                          </span>
                          <input
                            type="checkbox"
                            checked={selectedCity?.includes(city)}
                            onChange={(e) => handleCitySelection(e, city)}
                            className="ml-2 checkbox-custom"
                          />
                        </div>

                        {city === "beograd" && expandedCity === "beograd" && (
                          <div className="ml-4">
                            {Object.keys(combinedVeterinariData["beograd"]).map((area, idx) => (
                              <div key={idx} className="flex items-center justify-between px-4 py-2 text-2xl text-fontColorGray">
                                <span
                                  onClick={() => handleAreaSelection({ target: { checked: !selectedAreas.includes(area) } } as any, area)}
                                  className="cursor-pointer"
                                >
                                  {area}
                                </span>
                                <input
                                  type="checkbox"
                                  checked={selectedAreas.includes(area)}
                                  onChange={(e) => handleAreaSelection(e, area)}
                                  className="ml-2 checkbox-custom"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="w-full px-4 py-2 bg-white flex justify-end">
                    <button
                      onClick={handleShowVeterinarians}
                      className="w-[175px] py-2 px-4 rounded-2xl bg-mainColorBlue bg-opacity-20 text-fontColorGray text-lg font-medium"
                    >
                      Prikazi
                    </button>
                  </div>
                </div>
              )}

            </div>

            <div className="w-[400px]">
              <button
                onClick={() => { }}
                className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="text-2xl">Dežurni veterinari</span>
              </button>
            </div>
          </div>
        </div>

        {showVeterinarians && selectedCity && (
          <div className="mt-8">
            <h3>Veterinarske ambulante u {selectedAreas.length > 0 ? selectedAreas.join(", ") : "default"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCity.split(", ").map((city, idx) => {
                const cityData = combinedVeterinariData[city];
                const areaData = selectedAreas.length
                  ? selectedAreas.map((area) => cityData[area] || cityData.default).flat()
                  : cityData?.default;

                return (
                  <div key={idx}>
                    {areaData &&
                      areaData.map((vet: Veterinarian, index: number) => (
                        <SaloniCard
                          key={index}
                          name={vet.name}
                          site={vet.url}
                          address={vet.address}
                          phone={vet.phone}
                        />
                      ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
