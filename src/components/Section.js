import React from "react";
import Item from "./Item";

const Section = ({ header, items }) => {
  return (
    <div className="section">
      <h1>{header}</h1>
      <div className="section-items">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
