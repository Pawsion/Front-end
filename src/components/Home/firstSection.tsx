import Image from "next/image";
import home1 from "@/../public/assets/images/Home/home1.png";

export default function FirstSection() {
  return (
    <div className="p-20 flex flex-col-reverse items-center bg-secondSection justify-center md:flex-row lg:space-x-6 text-left">
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src={home1}
          alt="home page pic"
        />
      </div>
      <div className="space-y-10 md:w-1/2 sm:text-[18px] md:text-[24px]">
        <p className="custom-text-size sm:text-5xl md:text-6xl text-fontYellow font-RobotoSlab font-medium">
          <span className="block sm:inline">Ljubitelji i vlasnici pasa</span>
          <span className="hidden sm:inline"> - </span>
          <span className="block sm:inline">dobro došli u PetHub!</span>
        </p>
        <p>
          Bilo da ste vlasnik psa ili planirate to da postanete, na našem
          <span className="hidden sm:inline"><br /></span>
          sajtu možete pronaći <b>gomilu informacija</b> koje vam umnogome
          <span className="hidden sm:inline"><br /></span>
          mogu olakšati život.
        </p>
        <p>
          <b>Ne gubite vreme istražujući internet već ga kvalitetno
            <span className="hidden sm:inline"><br /></span>provedite sa
            svojim mezimcem.</b>
        </p>
      </div>
    </div>
  );
}
