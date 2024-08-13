"use client";

import React from "react";

// Define a type for the props
type ButtonBlogProps = {
  onClick: () => void; // Define the type of the onClick function
};

export default function ButtonBlog({ onClick }: ButtonBlogProps) {
  return (
    <button
      className="bg-mainColorPurple text-white font-semibold py-3 px-12 mt-12 rounded-[20px] text-[14px]"
      onClick={onClick}
    >
      UČITAJ JOŠ
    </button>
  );
}
