import React from "react";
import Item4 from "./Item4";
import Nav from "./Nav";

const Section4 = ({ header, nav, items }) => {
  return (
    <>
      <div className="py-3 px-2">
        <h1 className="text-blue-500 text-4xl py-10 font-bold text-center">
          {header}
        </h1>
        <nav className="py-10">
          <Nav />
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[60px] h-[600px]">
          {items.map((item4) => (
            <Item4 key={item4.id} {...item4} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Section4;
