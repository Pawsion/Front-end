"use client";
import { useState } from "react";
import { veterinariData } from "@/utils/veterinari-data";
import { veterinariDataRest } from "@/utils/veterinari-data-rest";
import { veterinariDataDezurni } from "@/utils/veterinari-data-dezurni";
import { Veterinarian } from "@/utils/veterinari-data";
import SaloniCard from "../Saloni/saloniCard";

export default function Locations() {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDezurniDropdownOpen, setIsDezurniDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDezurniCity, setSelectedDezurniCity] = useState<string | null>(null);
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [expandedCity, setExpandedCity] = useState<string | null>(null);
  const [showVeterinarians, setShowVeterinarians] = useState(false);
  const [showDezurniVeterinarians, setShowDezurniVeterinarians] = useState(false);

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
  const normalizedVeterinariDataDezurni = normalizeCityNames(veterinariDataDezurni);
  const updatedVeterinariDataRest = addDefaultArea(normalizedVeterinariDataRest);

  const combinedVeterinariData = {
    ...updatedVeterinariDataRest,
    ...normalizedVeterinariData,
  };

  const combinedDezurniVeterinariData = normalizedVeterinariDataDezurni;

  const toggleCityDropdown = () => setIsCityDropdownOpen(!isCityDropdownOpen);
  const toggleDezurniCityDropdown = () => setIsDezurniDropdownOpen(!isDezurniDropdownOpen);

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

    setShowVeterinarians(false);
    setShowDezurniVeterinarians(false);
  };

  const handleDezurniCitySelection = (e: React.ChangeEvent<HTMLInputElement>, city: string) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedDezurniCity(city);
    } else {
      setSelectedDezurniCity(null);
    }
  };

  const handleAreaSelection = (e: React.ChangeEvent<HTMLInputElement>, area: string) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedAreas((prevAreas) => [...prevAreas, area]);
    } else {
      setSelectedAreas((prevAreas) => prevAreas.filter((selected) => selected !== area));
    }

    setShowVeterinarians(false);
    setShowDezurniVeterinarians(false);
  };

  const sortedCities = Object.keys(combinedVeterinariData).sort((a, b) => {
    if (a.toLowerCase() === "beograd") return -1;
    if (b.toLowerCase() === "beograd") return 1;
    return a.localeCompare(b);
  });

  const sortedDezurniCities = Object.keys(combinedDezurniVeterinariData).sort((a, b) => {
    if (a.toLowerCase() === "beograd") return -1;
    if (b.toLowerCase() === "beograd") return 1;
    return a.localeCompare(b);
  });

  const handleShowVeterinarians = () => {
    setShowVeterinarians(true);
    setIsCityDropdownOpen(false);
    setIsDezurniDropdownOpen(false);
  };

  const handleShowDezurniVeterinarians = () => {
    setShowDezurniVeterinarians(true);
    setIsCityDropdownOpen(false);
    setIsDezurniDropdownOpen(false);
  };

  const resetDezurniButtonState = () => {
    setShowDezurniVeterinarians(false);
    setSelectedDezurniCity(null);
  };

  return (
    <div>
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
                  <span className="text-2xl">Izaberite grad</span>
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
                            <div
                              onClick={() => handleCitySelection({ target: { checked: !selectedCity?.includes(city) } } as any, city)}
                              className="cursor-pointer w-full flex items-center"
                            >
                              {city.charAt(0).toUpperCase() + city.slice(1)}
                              {city === "beograd" && (
                                <span
                                  className={`ml-4 cursor-pointer transition-transform ${expandedCity === "beograd" ? "rotate-180" : "rotate-0"}`}
                                  onClick={() => setExpandedCity(expandedCity === "beograd" ? null : "beograd")}
                                  style={{
                                    display: "inline-block",
                                    width: "0px",
                                    height: "0px",
                                    borderLeft: "5px solid transparent",
                                    borderRight: "5px solid transparent",
                                    borderTop: "8px solid #000",
                                    marginLeft: "10px"
                                  }}
                                ></span>
                              )}
                            </div>
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
                                  <div
                                    onClick={() => handleAreaSelection({ target: { checked: !selectedAreas.includes(area) } } as any, area)}
                                    className="cursor-pointer w-full"
                                  >
                                    {area}
                                  </div>
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

                    <div className="w-full px-4 py-2 bg-white flex justify-end sticky bottom-0 bg-white z-10">
                      <button
                        onClick={handleShowVeterinarians}
                        className="w-[175px] py-2 px-4 rounded-2xl bg-mainColorBlue bg-opacity-20 text-fontColorGray text-lg font-medium"
                      >
                        Prikaži
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative inline-block text-left xl:w-[400px]">
                <button
                  onClick={() => {
                    toggleDezurniCityDropdown();
                    resetDezurniButtonState();
                  }}
                  className={`inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 text-fontColorGray bg-white text-lg font-medium ${!isDezurniDropdownOpen ? "text-inactive" : "text-gray-700"} hover:bg-gray-50`}
                >
                  <span className="text-2xl">Dežurni Veterinari</span>
                  <span className="text-mainColorBlue text-2xl">
                    {isDezurniDropdownOpen ? "▴" : "▾"}
                  </span>
                </button>
                {isDezurniDropdownOpen && (
                  <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-96 text-fontColorGray flex flex-col">
                    <div className="py-2 flex-1">
                      {sortedDezurniCities.map((city, index) => (
                        <div key={index}>
                          <div className="flex items-center justify-between px-4 py-2 text-2xl text-fontColorGray">
                            <span
                              onClick={() => handleDezurniCitySelection({ target: { checked: !selectedDezurniCity } } as any, city)}
                              className="cursor-pointer"
                            >
                              {city.charAt(0).toUpperCase() + city.slice(1)}
                            </span>
                            <input
                              type="checkbox"
                              checked={selectedDezurniCity === city}
                              onChange={(e) => handleDezurniCitySelection(e, city)}
                              className="ml-2 checkbox-custom"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="w-full px-4 py-2 bg-white flex justify-end">
                      <button
                        onClick={handleShowDezurniVeterinarians}
                        className="w-[175px] py-2 px-4 rounded-2xl bg-mainColorBlue bg-opacity-20 text-fontColorGray text-lg font-medium"
                      >
                        Prikaži
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showVeterinarians && selectedCity && (
        <div className="mt-8">
          <div className="bg-fontColorPurple">
            <h2 className="m-auto w-11/12 sm:w-3/4 py-8 sm:py-12 text-3xl sm:text-5xl text-white text-left sm:text-left mb-8">
              Veterinarske ambulante u {selectedAreas.length > 0 ? selectedAreas.join(", ") : "default"}
            </h2>
          </div>
          <div className="m-auto w-11/12 sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {selectedCity.split(", ").map((city, idx) => {
              const cityData = combinedVeterinariData[city];
              const areaData = selectedAreas.length
                ? selectedAreas.map((area) => cityData[area] || cityData.default).flat()
                : cityData?.default;

              return (
                <div key={idx}>
                  {areaData && areaData.length > 0 ? (
                    areaData.map((vet: Veterinarian, index: number) => (
                      <SaloniCard
                        key={index}
                        name={vet.name}
                        site={vet.url}
                        address={vet.address}
                        phone={vet.phone}
                      />
                    ))
                  ) : (
                    <p>No data available for {city}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showDezurniVeterinarians && selectedDezurniCity && (
        <div className="mt-8">
          <div className="bg-fontColorPurple">
            <h2 className="m-auto w-11/12 sm:w-3/4 py-8 sm:py-12 text-3xl sm:text-5xl text-white text-left sm:text-left mb-8">
              Dežurni veterinari u {selectedDezurniCity}
            </h2>
          </div>
          <div className="m-auto w-11/12 sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sortedDezurniCities.map((city, idx) => {
              if (city === selectedDezurniCity) {
                const cityData = combinedDezurniVeterinariData[city];
                return (
                  <div key={idx}>
                    {cityData && cityData.length > 0 ? (
                      cityData.map((vet: Veterinarian, index: number) => (
                        <SaloniCard
                          key={index}
                          name={vet.name}
                          site={vet.url}
                          address={vet.address}
                          phone={vet.phone}
                        />
                      ))
                    ) : (
                      <p>No data available for {city}</p>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
