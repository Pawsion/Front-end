import Image from "next/image";
import orangePaw from "../../../public/assets/images/Homescreen1/orangePaw.png";

export default function OrangePawComponent() {
    return (
        <div className="absolute top-[-120px] left-[250px]">
            <Image
                src={orangePaw}
                alt="Orange Paw Image"
                width={90}
                height={90}
            />
        </div>
    );
}
