import React, { useState, useEffect } from 'react';

export const parseDescription = (description: string) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parts = description.split(/(\[b\].*?\[\/b\]|\[i\].*?\[\/i\]|\[br\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[b]')) {
      return <b key={index}>{part.replace(/\[b\]|\[\/b\]/g, '')}</b>;
    } else if (part.startsWith('[i]')) {
      return <i key={index}>{part.replace(/\[i\]|\[\/i\]/g, '')}</i>;
    } else if (part.startsWith('[br]')) {
      return !isMobile ? <br key={index} /> : null;
    } else {
      return part;
    }
  });
};
