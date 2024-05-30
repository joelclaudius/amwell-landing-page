import React from "react";
import Item4 from "./Item4";
import Nav from "./Nav";

const Section4 = ({ header, nav, items }) => {
  return (
    <>
      <div className="section">
        <h1>{header}</h1>
        <nav>
          <Nav />
        </nav>
        <div className="section-items">
          {items.map((item4) => (
            <Item4 key={item4.id} {...item4} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section4;
