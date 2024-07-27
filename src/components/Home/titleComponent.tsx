import Image from "next/image";
import homeTitle from "../../../public/assets/images/Homescreen1/homeTitle.png";

export default function TitleComponent() {
  return (
    <div className="ml-56 mt-56 flex items-center relative">
      <div>
        <Image
          src={homeTitle}
          alt="Pethub Title Image"
          width={760.4}
          height={260.53}
          priority
        />
      </div>
    </div>
  );
}
