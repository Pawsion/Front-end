import React from 'react';

export const parseDescription = (description: string) => {
  const parts = description.split(/(\[b\].*?\[\/b\]|\[i\].*?\[\/i\]|\[br\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[b]')) {
      return <b key={index}>{part.replace(/\[b\]|\[\/b\]/g, '')}</b>;
    } else if (part.startsWith('[i]')) {
      return <i key={index}>{part.replace(/\[i\]|\[\/i\]/g, '')}</i>;
    } else if (part.startsWith('[br]')) {
      return <br key={index} />;
    } else {
      return part;
    }
  });
};
