// Item.js
import React from "react";

const Item4 = ({
  image,
  title,
  subtitle,
  paragraph,
  buttonText,
  buttonLink,
}) => {
  return (
    <div>
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{paragraph}</p>
        <a href={buttonLink}>
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
};

export default Item4;
