import React from "react";
import SearchBar from "@/components/SearchBar/search-bar";
import Citati from "@/components/Blog/Citat";
import Footer from "@/components/Footer/footer";
import Perionice from "@/components/Blog/Perionice";
import Hrana from "@/components/Blog/Hrana";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4">
        <SearchBar />
      </header>
      <main className="flex-grow">
        <Citati />
        <Perionice />
        <Hrana />
      </main>
      <Footer />
    </div>
  );
}
