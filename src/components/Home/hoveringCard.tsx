"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function HoveringCard({
  title,
  imgL,
  imgD,
}: {
  title: string;
  imgL: StaticImageData;
  imgD: StaticImageData;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex h-[200px] flex-col items-center justify-center space-y-6 rounded-xl bg-gray-200
        p-4 hover:bg-mainColorPurple hover:text-white "
    >
      <Image src={hovered ? imgL : imgD} alt="image" />
      <h6>{title}</h6>
    </div>
  );
}
