import React from "react";
import Item4 from "./Item4";
import Nav from "./Nav";

const Section4 = ({ header, nav, items }) => {
  return (
    <div className="py-10 px-[100px]">
      <h1 className="text-blue-500 text-4xl font-bold py-10 text-center">
        {header}
      </h1>
      <nav className="py-10">
        <Nav />
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-auto">
        {items.map((item4) => (
          <Item4 key={item4.id} {...item4} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
