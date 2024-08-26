"use client";

import React, { useState } from "react";
import SearchBar from "@/components/SearchBar/search-bar";
import Footer from "@/components/Footer/footer";
import ButtonBlog from "@/components/Blog/button";
import { BLOG_DATA } from "@/utils/blog-data";
import BlogPost from "@/components/Blog/blogPost";

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [items] = useState(BLOG_DATA);

  const loadMoreItems = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, items.length));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="py-4">
        <SearchBar />
      </header>
      <main className="flex flex-col space-y-20">
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
        {visibleCount < items.length && (
          <div className="mb-8 mt-8 flex items-center justify-center">
            <ButtonBlog onClick={loadMoreItems} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
