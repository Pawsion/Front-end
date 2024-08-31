import PagesFirstSection from "@/components/Reusable/pages-first-section";
import { PANSIONI_HEADER } from "@/utils/pages-headers";
import pansioniImage from "@/../public/assets/images/Saloni/Background.png";
import Description from "@/components/Pansioni/description";
import PurpleList from "@/components/Pansioni/purple-list";

export default function PansioniPage() {
  return (
    <div className="">
      <PagesFirstSection title={PANSIONI_HEADER} bgImage={pansioniImage} />
      <Description />
      <PurpleList />
    </div>
  );
}
