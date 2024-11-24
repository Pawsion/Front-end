import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogHeaderProps {
  title: React.ReactNode;
  date: string;
  readingTime: string;
  imageSrc: StaticImageData;
  content: React.ReactNode[];
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, readingTime, imageSrc, content }) => {
  return (
    <div className="relative flex flex-col items-start p-4 lg:ml-48 lg:p-8">
      <div className="mb-8 max-w-[100%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%]">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-9xl font-lg text-fontColorBlack text-left mt-8 font-RobotoSlab">
          {title}
        </h1>
        <div className="text-gray-500 mt-4 sm:text-lg lg:text-2xl">
          {date} - {readingTime}
        </div>
      </div>

      <div className="relative w-full max-w-[100%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mt-6 lg:mt-8">
        <div className="relative h-64 sm:h-96 lg:h-[512px] xl:h-[540px] xl:w-[1440px] w-full">
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

      <div className="mb-10 mt-8 text-base sm:text-lg lg:text-2xl font-openSans leading-normal lg:leading-snug max-w-[100%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%]">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;
