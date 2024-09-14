import React from "react";
import BlogHeader from "@/components/Blog/blogHeader";
import blogImage from "../../../public/assets/images/Citat/citatDog.png";
import QuotesDisplay from "./citati";

const CitatiHeader: React.FC = () => {
  const title = "101 citat o psima koji će dotaći srce svakog vlasnika";
  const date = "11.07.2024";
  const readingTime = "5 minuta čitanja";
  const content = [
    "Psi su postali neizostavan deo naših domova, ali i naših srca. Citati o psima nas podsećaju na tu snažnu, neraskidivu vezu koju delimo s našim ljubimcima i zato uvek volimo da ih čitamo. Oni nas podsećaju na važnost saosećanja, vernosti i prijateljstva, svega onog što psi simbolizuju.",
    "Neka vas čitanje inspiriše da cenite svaki trenutak proveden sa čupavim vragolanima. Uživajte!",
  ];

  return (
    <div className="relative flex flex-col items-center">
      <BlogHeader
        title={title}
        date={date}
        readingTime={readingTime}
        imageSrc={blogImage}
        content={content}
      />
      <div className="w-full mt-8">
        <QuotesDisplay />
      </div>
    </div>
  );
};

export default CitatiHeader;
