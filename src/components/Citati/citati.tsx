"use client";

import React, { useEffect, useState } from "react";
import quotesData from "./quotes.json";
import { Quote } from "../../../public/types/types";
import quotesBullet from "../../../public/assets/images/Citat/quotesBullet.png";

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
          <div key={`highlighted-${index}`} className="text-center mb-4 mt-4">
            <blockquote className="bg-quotesPageOpacity p-4 text-2xl font-medium font-RobotoSlab md:text-center relative">
              <img
                src={quotesBullet.src}
                alt="Quote Bullet"
                className="mx-auto mb-2"
              />
              <p className="font-medium">{quotes[index].quote}</p>
              <footer className="mt-2 text-gray-700 font-medium">
                — {quotes[index].author}
              </footer>
            </blockquote>
          </div>
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
            className="m-auto mt-8 grid gap-8 px-8 text-start md:grid-cols-2 lg:w-3/4 font-RobotoSlab font-medium"
          >
            {gridQuotes.map((quote, idx) => (
              <div key={`grid-item-${index + idx}`} className="text-center">
                <img
                  src={quotesBullet.src}
                  alt="Quote Bullet"
                  className="mx-auto mb-2"
                />
                <blockquote className="text-[20px] font-medium md:text-center">
                  <p className="font-medium">{quote.quote}</p>
                  <footer className="mt-2 text-gray-700 font-medium">— {quote.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
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
        </div>
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

    if (quoteBlocks.length > 0) {
      const lastQuoteBlock = quoteBlocks[quoteBlocks.length - 1];
      quoteBlocks[quoteBlocks.length - 1] = React.cloneElement(lastQuoteBlock, {
        className: lastQuoteBlock.props.className.replace(' mb-4', ''),
      });
    }

    return quoteBlocks;
  };

  return <div className="p-4 md:p-0">{renderQuotes()}</div>;
};

export default QuotesDisplay;
