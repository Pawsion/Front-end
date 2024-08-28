"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/search-bar";
import Footer from "@/components/Footer/footer";
import ButtonBlog from "@/components/Blog/button";
import { BLOG_DATA } from "@/utils/blog-data";
import BlogPost from "@/components/Blog/blogPost";

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [items] = useState(BLOG_DATA);

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
