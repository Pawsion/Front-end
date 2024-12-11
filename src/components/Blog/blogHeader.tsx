
import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogHeaderProps {
  title: React.ReactNode;
  date: string;
  readingTime: string;
  imageSrc: StaticImageData;
  content: React.ReactNode[];
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  date,
  readingTime,
  imageSrc,
  content,
}) => {
  return (
    <div className="flex flex-col items-start p-4 lg:p-8 lg:w-3/4 lg:ml-52 lg:mr-auto">
      <div className="mb-8 w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-lg text-fontColorBlack text-left mt-8 font-RobotoSlab">
          {title}
        </h1>
        <div className="text-gray-500 mt-4 sm:text-lg lg:text-2xl">
          {date} - {readingTime}
        </div>
      </div>

      <div className="relative w-full mt-6 lg:mt-8">
        <div className="relative h-64 sm:h-96 lg:h-[512px] xl:h-[540px] w-full">
          <Image
            src={imageSrc}
            alt="Blog Header Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-8 text-base sm:text-lg lg:text-2xl font-openSans leading-normal lg:leading-snug w-full">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4 sm:mb-6 lg:mb-8">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;