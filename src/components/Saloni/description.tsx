import Image from "next/image";
import washedDog from "@/../public/assets/images/Saloni/WashedDog.png";

export default function Description() {
  return (
    <div className="m-auto w-3/4 space-y-10">
      <p>
        Salon za pse pruža profesionalne usluge nege i tretmana za pse. U
        salonima za pse, stručni negovatelji, poznati kao groomeri, obavljaju
        različite usluge kako bi održali psa čistim, urednim i zdravim. Ove
        usluge uključuju kupanje, šišanje, čišćenje ušiju, sečenje kandži,
        četkanje i druge kozmetičke tretmane za pse.
      </p>

      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="lg:w-1/2">
          <p>
            Redovno negovanje ne samo da čini da vaš pas izgleda dobro, nego
            pomaže i u očuvanju zdravlja kože i dlake uklanjanjem mrtve dlake i
            drugih nečistoća. Proces nege pasa varira u zavisnosti od uzrasta i
            rase, kao i stila nege koji želite da vaš pas ima. Ukoliko ste
            odgovoran vlasnik biće vam neophodno sledeće:
          </p>
          <ul>
            {/* // ! TODO -> Should be links to sections down  */}
            <li>Redovno četkanje dlake i šišanje psa</li>
            <li>Kupanje i čišćenje psa</li>
            <li>Dobra oralna higijena</li>
            <li>Pronalaženje salona za pse</li>
          </ul>
        </div>
        <Image
          src={washedDog}
          alt="Dog image"
          className="max-w-1/2 h-[300px] w-[300px] object-contain"
        />
      </div>
    </div>
  );
}
