"use client";

import React, { useEffect, useState } from "react";
import quotesData from "./quotes.json";
import { Quote } from "../../../public/types/types";

const QuotesDisplay: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    setQuotes(quotesData);
  }, []);

  const renderQuotes = () => {
    const quoteBlocks: React.JSX.Element[] = [];
    let index = 0;
    const imagePaths = [
      "/assets/images/Citat/first.png",
      "/assets/images/Citat/second.png",
      "/assets/images/Citat/third.png",
      "/assets/images/Citat/fourth.png",
      "/assets/images/Citat/fifth.png",
    ];
    let imageIndex = 0;

    const addHighlightedQuote = () => {
      if (quotes[index]) {
        quoteBlocks.push(
          <blockquote
            key={`highlighted-${index}`}
            className="bg-quotesPageOpacity p-4 text-[24px]  font-regular md:text-center"
          >
            <p>{quotes[index].quote}</p>
            <footer className="mt-2 text-gray-700">
              — {quotes[index].author}
            </footer>
          </blockquote>,
        );
        index++;
      }
    };

    const addRegularQuotesGrid = () => {
      const gridQuotes = quotes.slice(index, index + 4);
      if (gridQuotes.length > 0) {
        quoteBlocks.push(
          <div
            key={`grid-${index}`}
            className="m-auto mt-8 grid gap-8  px-8 text-start md:grid-cols-2 lg:w-3/4"
          >
            {gridQuotes.map((quote, idx) => (
              <blockquote
                key={`grid-item-${index + idx}`}
                className="text-[20px] font-regular md:text-center"
              >
                <p>{quote.quote}</p>
                <footer className="mt-2 text-gray-700">— {quote.author}</footer>
              </blockquote>
            ))}
          </div>,
        );
        index += 4;
      }
    };

    const addImage = () => {
      quoteBlocks.push(
        <div key={`image-${index}`} className="mt-8">
          <img
            src={imagePaths[imageIndex]}
            alt="Decorative"
            className="w-full"
          />
        </div>,
      );
      imageIndex = (imageIndex + 1) % imagePaths.length;
    };

    addHighlightedQuote();
    addRegularQuotesGrid();
    addHighlightedQuote();
    addRegularQuotesGrid();
    addHighlightedQuote();
    addRegularQuotesGrid();
    addImage();

    while (index < quotes.length) {
      addRegularQuotesGrid();
      addHighlightedQuote();
      addRegularQuotesGrid();
      addHighlightedQuote();
      addRegularQuotesGrid();
      addHighlightedQuote();
      addRegularQuotesGrid();

      if (index < quotes.length) {
        addImage();
      }
    }

    return quoteBlocks;
  };

  return <div className="p-4 md:p-0">{renderQuotes()}</div>;
};

export default QuotesDisplay;
