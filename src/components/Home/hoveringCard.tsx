"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HoveringCard({
  title,
  imgL,
  imgD,
  link,
}: {
  title: string;
  imgL: StaticImageData;
  imgD: StaticImageData;
  link: string;
}) {
  const [hovered, setHovered] = useState(false);

  const handleTouchStart = () => {
    setHovered(!hovered);
  };

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={handleTouchStart}
        className="flex h-[280px] flex-col items-center space-y-6 rounded-3xl bg-cards p-4 hover:bg-mainColorPurple hover:text-white m-2 cursor-pointer"
      >
        <div className="relative h-[100px] w-full">
          <Image
            src={hovered ? imgL : imgD}
            alt="image"
            width={80}
            height={80}
            className="object-contain absolute top-6 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <p className="lg:pt-8 ml-4">{title}</p>
      </div>
    </Link>
  );
}
