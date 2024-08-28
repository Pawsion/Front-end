"use client";

import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar/search-bar";
import Hrana from "@/components/Blog/Hrana";
import Perionice from "@/components/Blog/Perionice";
import Citati from "@/components/Blog/Citat";
import Footer from "@/components/Footer/footer";
import ButtonBlog from "@/components/Blog/button";
import Azili from "@/components/Blog/azili";
import Parkovi from "@/components/Blog/parkovi";
import Imena from "@/components/Blog/imena";
import Kafici from "@/components/Blog/kafici";

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [items, setItems] = useState([
    { id: 1, component: <Citati />, route: "/blog/citati" },
    { id: 2, component: <Perionice />, route: "/blog/wash" },
    { id: 3, component: <Hrana />, route: "/blog/hrana" },
    { id: 4, component: <Azili />, route: "/blog/azili" },
    { id: 5, component: <Parkovi />, route: "/blog/parkovi" },
    { id: 6, component: <Imena />, route: "/blog/imena" },
    { id: 7, component: <Kafici />, route: "/blog/kafici" },
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
            <Link key={item.id} href={item.route}>
              <div className="cursor-pointer">
                {item.component}
              </div>
            </Link>
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
