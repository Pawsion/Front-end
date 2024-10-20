import Image from "next/image";
import home1 from "@/../public/assets/images/Home/home1.png";

export default function FirstSection() {
  return (
    <div className="p-20 flex flex-col-reverse items-center bg-secondSection justify-center md:flex-row lg:space-x-6">
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src={home1}
          alt="home page pic"
          className="h-[400px] w-auto xl:h-[600px]"
        />
      </div>
      <div className="space-y-10 md:w-1/2 text-[24px]">
        <h3 className="text-6xl text-fontYellow font-RobotoSlab font-medium">
          Ljubitelji i vlasnici pasa<br /> dobro došli u PetHub!
        </h3>
        <p>
          Bilo da ste vlasnik psa ili planirate to da postanete, na našem<br /> sajtu
          možete pronaći <b>gomilu informacija</b> koje vam umnogome<br /> mogu olakšati
          život.
        </p>
        <p>
          <b>Ne gubite vreme istražujući internet već ga kvalitetno<br /> provedite sa
          svojim mezimcem.</b>
        </p>
      </div>
    </div>
  );
}
