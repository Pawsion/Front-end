"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/search-bar";
<<<<<<< HEAD
=======
import Hrana from "@/components/Blog/Hrana";
import Perionice from "@/components/Blog/Perionice";
import Citati from "@/components/Blog/Citat";
>>>>>>> e32c1edf3b28e5e2ebf777efcc3a6bcc178f0394
import Footer from "@/components/Footer/footer";
import ButtonBlog from "@/components/Blog/button";
import { BLOG_DATA } from "@/utils/blog-data";
import BlogPost from "@/components/Blog/blogPost";

export default function BlogPage() {
<<<<<<< HEAD
  const [visibleCount, setVisibleCount] = useState(2);
  const [items] = useState(BLOG_DATA);
=======
  const [visibleCount, setVisibleCount] = useState(3);
  const [items, setItems] = useState([
    { id: 1, component: <Citati />, route: "/blog/citati" },
    { id: 2, component: <Perionice />, route: "/blog/wash" },
    { id: 3, component: <Hrana />, route: "/blog/food" },
    { id: 4, component: <Azili />, route: "/blog/azili" },
    { id: 5, component: <Parkovi />, route: "/blog/parkovi" },
    { id: 6, component: <Imena />, route: "/blog/imena" },
    { id: 7, component: <Kafici />, route: "/blog/kafici" },
  ]);
>>>>>>> e32c1edf3b28e5e2ebf777efcc3a6bcc178f0394

  const loadMoreItems = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 2, items.length));
  };

  return (
    <div className="flex flex-col">
      <header className="py-4">
        <SearchBar />
        <h3 className="pl-4 text-4xl font-bold text-yellow-400 md:hidden">
          BLOG
        </h3>
      </header>
      <main className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:flex lg:flex-col lg:items-center">
        {items.slice(0, visibleCount).map((item) => (
          <BlogPost
            key={item.title}
            link={item.link}
            description={item.description}
            title={item.title}
            image={item.image}
            timeToRead={item.timeToRead}
          />
        ))}
      </main>
      {visibleCount < items.length && (
        <div className="my-8 flex justify-center">
          <ButtonBlog onClick={loadMoreItems} />
        </div>
      )}
      <Footer />
    </div>
  );
}
