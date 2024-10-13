import { BlogData } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";  // Import Head from next/head

export default function BlogPost({
  title,
  image,
  description,
  timeToRead,
  link,
  meta
}: BlogData) {
  return (
    <>
      <Head>
        <meta name="description" content={meta} />
      </Head>

      <Link
        href={link}
        className="flex flex-col rounded-3xl border bg-slate-200
        lg:flex-row lg:border-none lg:bg-white xl:w-3/4"
      >
        <div
          className="relative h-[300px]  
          lg:h-[600px] lg:w-[50%]"
        >
          <Image
            alt="Citati image"
            src={image}
            className="rounded-t-3xl object-cover 
            lg:rounded-s-3xl lg:rounded-tr-none"
            fill
          />
        </div>
        <div
          className="p-4text-lg flex flex-col justify-start space-y-6 p-4 
          text-gray-600 lg:w-1/2 lg:space-y-20"
        >
          <h4 className="hidden text-xl lg:flex ">{timeToRead}</h4>
          <h1 className="text-4xl font-bold text-fontColorGray lg:text-5xl font-RobotoSlab">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </Link>
    </>
  );
}
