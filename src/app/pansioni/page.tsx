import PagesFirstSection from "@/components/Reusable/pages-first-section";
import { PANSIONI_HEADER } from "@/utils/pages-headers";
import pansioniImage from "@/../public/assets/images/Saloni/Background.png";
import Description from "@/components/Pansioni/description";
import PurpleList from "@/components/Pansioni/purple-list";
import BelowPurple from "@/components/Pansioni/below-purple";

export default function PansioniPage() {
  return (
    <div className="">
      <PagesFirstSection title={PANSIONI_HEADER} bgImage={pansioniImage} />
      <div className="m-auto w-3/4 space-y-20">
        <Description />
        <p>
          Ovi objekti mogu
          <span className="font-bold">
            varirati u svojim uslugama, sadržajima i cenama
          </span>
          , ali osnovna svrha im je briga o psima dok su razdvojeni od svojih
          vlasnika.
        </p>

        <PurpleList />
        <BelowPurple />
      </div>
    </div>
  );
}
