import React from "react";
import Item from "./Item";

const Section = ({ header, items }) => {
  return (
    <div className="py-3 px-3">
      <h1 className="text-blue-500 text-4xl font-bold py-10 text-center">
        {header}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[60px] h-[500px]">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
