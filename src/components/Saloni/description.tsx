import Image from "next/image";
import washedDog from "@/../public/assets/images/Saloni/SaloniSecondDog.png";
import firstDog from "@/../public/assets/images/Saloni/SaloniFirstDog.png";
import Link from "next/link";

export default function Description() {
  return (
    <div className="m-auto w-3/4 space-y-40">
      <div className="flex flex-col items-center justify-center space-y-20">
        <div
          className="flex flex-col items-center justify-center space-y-20 lg:flex-row 
          lg:space-x-72 lg:space-y-0"
        >
          <p className="lg:w-1/2 text-2xl">
            Salon za pse pruža profesionalne usluge nege i tretmana za pse. U
            salonima za pse, stručni negovatelji, poznati kao groomeri,
            obavljaju različite usluge kako bi održali psa čistim, urednim i
            zdravim. Ove usluge uključuju <b>kupanje, šišanje, čišćenje ušiju,
            sečenje kandži, četkanje i druge kozmetičke tretmane za pse.</b>
          </p>

          <Image
            src={firstDog}
            alt="First dog image"
            className="max-w-1/2 h-[300px] w-[300px] object-contain"
          />
        </div>
        <div
          className="flex flex-col-reverse items-center justify-center lg:flex-row 
          lg:space-x-72 lg:space-y-0"
        >
          <Image
            src={washedDog}
            alt="Dog image"
            className="max-w-1/2 h-[300px] w-[300px] object-contain"
          />
          <p className="my-20 lg:w-1/2 text-2xl">
            Redovno negovanje ne samo da čini da vaš pas izgleda dobro, nego
            <b> pomaže i u očuvanju zdravlja kože i dlake</b> uklanjanjem mrtve dlake i
            drugih nečistoća. Proces nege pasa varira u zavisnosti od uzrasta i
            rase, kao i stila nege koji želite da vaš pas ima. Ukoliko ste
            odgovoran vlasnik biće vam neophodno sledeće:
          </p>
        </div>
      </div>

      <nav className="rounded-3xl bg-gray-200 px-20 py-8">
        <ul className="list-disc space-y-10 text-2xl text-mainColorBlue">
          <li>
            <Link href="#1">Redovno četkanje dlake i šišanje psa</Link>
          </li>
          <li>
            <Link href="#2">Kupanje i čišćenje psa</Link>
          </li>
          <li>
            <Link href="#3">Dobra oralna higijena</Link>
          </li>
          <li>
            <Link href="#4">Pronalaženje salona za pse</Link>
          </li>
          <li>
            <Link href="#5">Saloni i frizeri za pse u gradovima Srbije</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
