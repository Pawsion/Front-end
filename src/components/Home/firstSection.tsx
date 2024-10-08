import Image from "next/image";
import home1 from "@/../public/assets/images/Home/home1.png";

export default function FirstSection() {
  return (
    <div className="m-20 flex flex-col-reverse items-center justify-center md:flex-row  lg:space-x-6">
      <div className="flex items-center justify-center md:w-1/2">
        <Image
          src={home1}
          alt="home page pic"
          className="h-[400px] w-auto xl:h-[600px]"
        />
      </div>
      <div className="space-y-10 md:w-1/2">
        <h3 className="text-5xl text-[#E4A949]">
          Ljubitelji i vlasnici pasa dobro došli u PetHub!
        </h3>
        <p>
          Bilo da ste vlasnik psa ili planirate to da postanete, na našem sajtu
          možete pronaći gomilu informacija koje vam umnogome mogu olakšati
          život.
        </p>
        <p>
          Ne gubite vreme istražujući internet već ga kvalitetno provedite sa
          svojim mezimcem.
        </p>
      </div>
    </div>
  );
}
