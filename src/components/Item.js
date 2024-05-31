// Item.js
import React from "react";

const Item = ({
  image,
  title,
  subtitle,
  paragraph,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="rounded-t-lg" />
      <h2 className="text-black uppercase text-lg font-semibold m-3 px-2">
        {title}
      </h2>
      <h3 className="text-blue-500 text-lg font-bold mb-3 px-3">{subtitle}</h3>
      <p className="p-3">{paragraph}</p>
      <a href={buttonLink}>
        <button className="text-blue-800 text-xl pr-0 mb-0">
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Item;
