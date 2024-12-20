import PagesFirstSection from "@/components/Reusable/pages-first-section";
import { PANSIONI_HEADER } from "@/utils/pages-headers";
import pansioniImage from "@/../public/assets/images/Pansioni/pansioni.png";
import Description from "@/components/Pansioni/description";
import PurpleList from "@/components/Pansioni/purple-list";
import BelowPurple from "@/components/Pansioni/below-purple";
import PansioniPoGradu from "@/components/Pansioni/pansioni-po-gradu";
import Vrtici from "@/components/Pansioni/vrtici";
import VrticiTwo from "@/components/Pansioni/vrtici-2";
import Prednosti from "@/components/Pansioni/vrtici-prednosti";
import VrticiPoGradu from "@/components/Pansioni/vrtici-card";
import { parseDescription } from "@/utils/parser";

export default function PansioniPage() {
  return (
    <div className="">
    <PagesFirstSection title={parseDescription(PANSIONI_HEADER)} bgImage={pansioniImage} /> 

      <div className="m-auto w-3/4 xl:space-y-10 space-y-6">
        <Description />
        <p className="text-base lg:text-2xl leading-relaxed">
          Ovi objekti mogu
          <span className="font-bold">
            &nbsp;varirati u svojim uslugama, sadržajima i cenama
          </span>
          , ali osnovna svrha im je briga o psima
          <span className="hidden sm:inline"><br /></span> dok su razdvojeni od svojih vlasnika.
        </p>

        <PurpleList />
        <BelowPurple />
      </div>

      <div id="beograd">
        <PansioniPoGradu city="Beograd" />
      </div>
      <div id="novi-sad">
        <PansioniPoGradu city="Novi Sad" />
      </div>
      <div id="subotica">
        <PansioniPoGradu city="Subotica" />
      </div>
      <div id="nis">
        <PansioniPoGradu city="Niš" />
      </div>

      <div id="vrtici" className="m-auto w-3/4 space-y-20">
        <Vrtici />
        <div className="xl:text-2xl">
          <p className="leading-relaxed -mt-8">
            Radno vreme najčešće kreće od 7 ili 9 sati ujutru tako da je
            prilagođeno poslovnim obavezama vlasnika pasa.
            <span className="hidden sm:inline"><br /></span>
            Cene su raznolike od grada do grada, a vrići često imaju{" "}
            <b>mesečne pakete</b> koji vam omogućavaju dodatni
            <span className="hidden sm:inline"><br /></span> popust.
          </p>
          <p className="xl:mt-16 mt-6 leading-relaxed">
            Da bi pas bio prihvaćen u pansion mora biti vakcinisan i
            socijalizovan.
          </p>
        </div>
        <VrticiTwo />
        <Prednosti />
      </div>
      <div>
        <VrticiPoGradu city="Beograd" />
        <VrticiPoGradu city="Novi Sad" />
      </div>
    </div>
  );
}
