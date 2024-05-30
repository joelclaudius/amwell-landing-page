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
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} />
      <h2 className="text-black uppercase text-lg font-semibold">{title}</h2>
      <h3 className="text-blue-500 text-lg font-bold">{subtitle}</h3>
      <p>{paragraph}</p>
      <a href={buttonLink}>
        <button className="text-blue-800 text-xl pr-0">{buttonText}</button>
      </a>
    </div>
  );
};

export default Item;
