import { StaticImageData } from "next/image";

export type BlogData = {
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  timeToRead: string;
};
