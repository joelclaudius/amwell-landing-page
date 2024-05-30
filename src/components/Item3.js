// Item3.js
import React from "react";

const Item3 = ({ title, subtitle, paragraph }) => {
  return (
    <div className="card">
      <p>{paragraph}</p>
      <h3>{subtitle}</h3>
      <h2>{title}</h2>
    </div>
  );
};

export default Item3;
