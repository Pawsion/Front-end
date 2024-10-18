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
      className="flex h-[280px] flex-col items-center justify-center space-y-6 rounded-3xl bg-cards
        p-4 hover:bg-mainColorPurple hover:text-white m-2"
    >
      <Image src={hovered ? imgL : imgD} alt="image" />
      <h6>{title}</h6>
    </div>
  );
}
