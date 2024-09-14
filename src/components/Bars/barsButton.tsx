"use client";
import React from "react";

interface BarButtonProps {
  location: string;
  isActive: boolean;
  onClick: () => void;
}

const BarButton: React.FC<BarButtonProps> = ({ location, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[359px] h-[48px] text-white text-[24px] font-semibold rounded-[50px] transition duration-300 ${
        isActive ? "bg-mainColorBlue" : "bg-mainColorTan"
      }`}
    >
      {location}
    </button>
  );
};

export default BarButton;
