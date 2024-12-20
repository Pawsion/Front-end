import Image, { StaticImageData } from "next/image";

export default function PagesFirstSection({
  title,
  bgImage,
}: {
  title: React.ReactNode;
  bgImage: StaticImageData;
}) {
  return (
    <div className="relative flex min-h-[35vh] sm:min-h-[20vh] md:min-h-[70vh] lg:min-h-[70vh] bg-[#F5F5F7] pl-16 lg:pl-20 pt-8 lg:pt-0">
      <h1
        className="z-[1] lg:my-auto w-full max-w-[90%] sm:w-[80%] md:w-[70%] 
        text-left text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold text-mainColorBlue 
        sm:leading-snug md:leading-tight lg:leading-tight 
        sm:line-clamp-3 sm:max-w-[80%] md:max-w-[70%] lg:max-w-[100%] sm:mx-auto
        lg:w-3/4 lg:text-start lg:text-8xl lg:ml-40"
      >
        {title}
      </h1>
      <Image
        src={bgImage}
        alt="Background dog"
        className="absolute right-0 top-0 hidden lg:block object-cover w-full max-h-[70vh]"
      />
    </div>
  );
}
