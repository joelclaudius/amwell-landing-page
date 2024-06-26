import React from "react";
import Item from "./Item";

const Section = ({ header, items }) => {
  return (
    <div className="py-10 px-[100px]">
      <h1 className="text-blue-500 text-4xl font-bold py-10 text-center">
        {header}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-auto">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
