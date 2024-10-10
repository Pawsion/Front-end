import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BlogHeaderProps {
  title: React.ReactNode;
  date: string;
  readingTime: string;
  imageSrc: StaticImageData; // Type for Next.js static images
  content: React.ReactNode[];
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, date, readingTime, imageSrc, content }) => {
  return (
    <div className="relative flex flex-col items-start p-4">
      <div className="mb-4 ml-64">
        <h1 className="text-[112px] font-regular text-fontColorBlack text-left mt-16 leading-none font-RobotoSlab">
          <span>{title}</span>
        </h1>
        <div className="text-gray-500 mt-8 text-[24px]">
          {date} - {readingTime}
        </div>
      </div>

      <div className="relative w-[1440px] mt-2 ml-64">
        <div className="relative h-[512px] w-full">
          <Image
            src={imageSrc}
            alt="Blog Header Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="mb-16 ml-64 mt-8 text-[28px] font-openSans font-regular">
        {content.map((paragraph, index) => (
          <p key={index} className="mb-16">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogHeader;
