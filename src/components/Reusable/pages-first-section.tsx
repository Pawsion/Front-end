import Image, { StaticImageData } from "next/image";

export default function PagesFirstSection({
  title,
  bgImage,
}: {
  title: string;
  bgImage: StaticImageData;
}) {
  return (
    <div className="relative flex min-h-[70vh] bg-[#F5F5F7] pl-10 lg:pl-20">
      <h1
        className="z-[1] my-auto w-3/4 text-center text-5xl font-semibold 
        text-mainColorBlue  md:w-1/2 md:max-w-[50%] lg:w-3/4 lg:text-start"
      >
        {title}
      </h1>
      {/* //! TODO -> Put it absolute and text over it on SM and MD  */}
      <Image
        src={bgImage}
        alt="Background dog"
        className="absolute right-0 hidden max-h-[70vh] md:block"
      />
    </div>
  );
}
