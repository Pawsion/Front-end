import { BlogData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost({
  title,
  image,
  description,
  timeToRead,
  link,
}: BlogData) {
  return (
    <Link href={link} className="flex flex-col lg:flex-row xl:mx-36">
      <div
        className="relative h-[300px]  
        md:h-[500px] lg:h-[600px] lg:w-[50%]"
      >
        <Image
          alt="Citati image"
          src={image}
          className="border border-red-700 object-cover 
          lg:rounded-s-3xl xl:rounded-s-full"
          fill
        />
      </div>
      <div
        className="p-4text-lg flex flex-col justify-start space-y-6 text-gray-600 
        lg:w-1/2 lg:space-y-20"
      >
        <h4 className="text-xl ">{timeToRead}</h4>
        <h1 className="text-4xl font-bold lg:text-5xl">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}
