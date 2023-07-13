import React, { useState } from "react";

const StringArea = ({ text, max }) => {
  const [showFullText, SetShowFullText] = useState(false);
  const handleClick = () => {
    SetShowFullText(!showFullText);
  };
  // eğerki uazımın uzunluğu max değeri uzunsa maxa olan kısımını al
  // ve sonuna 3 nokta koy değilse olduğu gibi kalsın

  let shortText = text;
  if (text.length > max && !showFullText) {
    shortText = text.substring(0, max) + "...";
  }

  return (
    <div>
      <p>{shortText}</p>
      <button
        onClick={handleClick}
        className="button bg-red-900 rounded text-black"
      >
        {showFullText ? "Kapat👆" : "Daha Fazla Oku...👇"}
      </button>
    </div>
  );
};

export default StringArea;
