import React from "react";
import Item3 from "./Item3";

const Section3 = ({ header, items }) => {
  return (
    <div className="section">
      <h1>{header}</h1>
      <div className="section-items">
        {items.map((item3) => (
          <Item3 key={item3.id} {...item3} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
