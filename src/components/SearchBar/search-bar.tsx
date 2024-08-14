import React from "react";
import Image from "next/image";
import searchIcon from "../../../public/assets/images/SearchBar/searchIcon.png";

export default function SearchBar() {
  return (
    <div className="relative flex justify-center py-4">
      <input
        type="text"
        placeholder="Tražite određenu temu?"
        className="w-[75vw] max-w-[75vw] px-4 py-3 pr-12 bg-mainColorTan border border-mainColorTan rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-mainColorBlue"
      />
      <button
        type="button"
        className="absolute right-72 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
      >
        <Image
          src={searchIcon}
          alt="Search Icon"
          width={30}
          height={30}
        />
      </button>
    </div>
  );
}
