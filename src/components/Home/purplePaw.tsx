import Image from "next/image";
import purplePaw from "../../../public/assets/images/Homescreen1/purplePaw.png";

export default function PurplePawComponent() {
    return (
        <div className="absolute top-[-30px] left-[70px]">
            <Image
                src={purplePaw}
                alt="Purple Paw Image"
                width={113}
                height={113}
            />
        </div>
    );
}
