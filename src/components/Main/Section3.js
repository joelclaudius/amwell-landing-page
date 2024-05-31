import React from "react";
import Item3 from "./Item3";

const Section3 = ({ header, items }) => {
  return (
    <div className="py-10 px-[100px]">
      <h1 className="text-blue-500 text-4xl py-10 font-bold text-center">
        {header}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-auto">
        {items.map((item3) => (
          <Item3 key={item3.id} {...item3} />
        ))}
      </div>
    </div>
  );
};

export default Section3;
