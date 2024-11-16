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

  return (
    <Link href={link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex h-[280px] flex-col items-center justify-center space-y-6 rounded-3xl bg-cards
          p-4 hover:bg-mainColorPurple hover:text-white m-2 cursor-pointer"
      >
        <Image src={hovered ? imgL : imgD} alt="image" />
        <h6>{title}</h6>
      </div>
    </Link>
  );
}
