import PagesFirstSection from "@/components/Reusable/pages-first-section";
import { PANSIONI_HEADER } from "@/utils/pages-headers";
import pansioniImage from "@/../public/assets/images/Pansioni/pansioni.png";
import Description from "@/components/Pansioni/description";
import PurpleList from "@/components/Pansioni/purple-list";
import BelowPurple from "@/components/Pansioni/below-purple";
import PansioniPoGradu from "@/components/Pansioni/pansioni-po-gradu";
import { PANSIONI_BEOGRAD } from "@/utils/pansioni-data";

export default function PansioniPage() {
  return (
    <div className="">
      <PagesFirstSection title={PANSIONI_HEADER} bgImage={pansioniImage} />
      <div className="m-auto w-3/4 space-y-20">
        <Description />
        <p className="text-2xl">
          Ovi objekti mogu
          <span className="font-bold">
           &nbsp;varirati u svojim uslugama, sadržajima i cenama
          </span>
          , ali osnovna svrha im je briga o psima<br /> dok su razdvojeni od svojih
          vlasnika.
        </p>

        <PurpleList />
        <BelowPurple />
      </div>
      <PansioniPoGradu city="Beograd" data={PANSIONI_BEOGRAD} />
      <PansioniPoGradu city="Novi Sad" data={PANSIONI_BEOGRAD} />
      <PansioniPoGradu city="Subotica" data={PANSIONI_BEOGRAD} />
      <PansioniPoGradu city="Niš" data={PANSIONI_BEOGRAD} />
    </div>
    //Uroš 9/13
  );
}
