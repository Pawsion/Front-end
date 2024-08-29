import React from "react";
import DogWithShadow from "./Home1/dogWithShadow";
import Paws from "./Home1/paws";

export default function FirstSection() {
  return (
    <div className="relative">
      <div className="m-auto mb-20 p-6 lg:min-h-[70vh] lg:w-3/4 lg:p-0">
        <Paws />
        <h1
          className=" text-6xl font-semibold text-fontColorPurple 
        lg:mt-40 lg:w-1/2"
        >
          Ljubitelji i vlasnici pasa, dobro došli u
          <span className="text-fontYellow"> PetHub</span>
        </h1>
        <DogWithShadow />
      </div>
    </div>
  );
}
