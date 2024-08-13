"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/search-bar";
import Hrana from "@/components/Blog/hrana";
import Perionice from "@/components/Blog/perionice";
import Citati from "@/components/Blog/citat";
import Footer from "@/components/Footer/footer";
import ButtonBlog from "@/components/Blog/button";
import Azili from "@/components/Blog/azili";
import Parkovi from "@/components/Blog/parkovi";
import Imena from "@/components/Blog/imena";
import Kafici from "@/components/Blog/kafici";

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [items, setItems] = useState([
    { id: 1, component: <Citati /> },
    { id: 2, component: <Perionice /> },
    { id: 3, component: <Hrana /> },
    { id: 4, component: <Azili /> },
    { id: 5, component: <Parkovi /> },
    { id: 6, component: <Imena /> },
    { id: 7, component: <Kafici /> },
  ]);

  const loadMoreItems = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, items.length));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4">
        <SearchBar />
      </header>
      <main className="flex-grow flex flex-col">
        <div className="flex-grow">
          {items.slice(0, visibleCount).map((item) => (
            <div key={item.id}>{item.component}</div>
          ))}
        </div>
        {visibleCount < items.length && (
          <div className="flex justify-center items-center mt-8 mb-8">
            <ButtonBlog onClick={loadMoreItems} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
