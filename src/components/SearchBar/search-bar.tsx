import React from "react";
import Image from "next/image";
import searchIcon from "../../../public/assets/images/SearchBar/searchIcon.png";

export default function SearchBar() {
  return (
    <div className="relative hidden py-4 pl-4 text-center md:flex">
      <input
        type="text"
        placeholder="Tražite određenu temu?"
        className="m-auto w-3/4 rounded-full border border-mainColorTan bg-mainColorTan
        px-4 py-3 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-mainColorBlue"
      />
      <div className="absolute inset-y-0 right-0 mr-[14%] flex items-center">
        <Image src={searchIcon} alt="Search Icon" width={30} height={30} />
      </div>
    </div>
  );
}
