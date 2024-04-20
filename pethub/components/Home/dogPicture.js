import React from "react";
import dogImage from "@/assets/images/homeDogImage.png";

export default function DogImage() {
  return (
    <img
      src={dogImage.src}
      alt="Dog"
      className="w-auto max-w-full max-h-[100vh] absolute right-[25vh] top-[-30vh] z-[-1]"
    />
  );
};
