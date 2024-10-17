import Image, { StaticImageData } from "next/image";

export default function PagesFirstSection({
  bgImage,
}: {
  bgImage: StaticImageData;
}) {
  return (
    <div className="relative flex min-h-[70vh] bg-[#F5F5F7] pl-10 lg:pl-20">
      <h1 className="z-[1] my-auto w-full text-center text-5xl font-medium  
          md:text-5xl lg:text-8xl md:w-1/2 md:max-w-[50%] lg:w-3/4 lg:text-start lg:ml-40">
        <span className="text-activeLinkGold">PetHub</span>
        <span className="text-mainColorBlue"> - usluge i</span>
        <br />
        <span className="text-mainColorBlue">
          saveti za pse koji će<br />
          vam olakšati život
        </span>
      </h1>
      <Image
        src={bgImage}
        alt="Background dog"
        className="absolute right-0 hidden max-h-[70vh] md:block"
      />
    </div>
  );
}
