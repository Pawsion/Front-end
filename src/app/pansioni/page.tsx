import PagesFirstSection from "@/components/Reusable/pages-first-section";
import { PANSIONI_HEADER } from "@/utils/pages-headers";
import pansioniImage from "@/../public/assets/images/Saloni/Background.png";

export default function PansioniPage() {
  return (
    <div>
      <PagesFirstSection title={PANSIONI_HEADER} bgImage={pansioniImage} />
    </div>
  );
}
