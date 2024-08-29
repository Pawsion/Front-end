import { StaticImageData } from "next/image";

export type BlogData = {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  timeToRead: string;
};

export type SaloniData = {
  image: StaticImageData;
  title: string;
  description: string;
  description2: string;
};
