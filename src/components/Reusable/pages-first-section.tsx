import Image, { StaticImageData } from "next/image";

export default function PagesFirstSection({
  title,
  bgImage,
}: {
  title: string;
  bgImage: StaticImageData;
}) {
  return (
    <div className="flex bg-[#F5F5F7] pl-10 lg:pl-20">
      <h1
        className="my-auto w-3/4 min-w-[50%] text-center text-5xl font-semibold 
        text-mainColorBlue  lg:w-3/4 lg:text-start"
      >
        {title}
      </h1>
      {/* //! TODO -> maybe put it absolute and text over it on SM and MD  */}
      <Image src={bgImage} alt="Background dog" />
    </div>
  );
}
