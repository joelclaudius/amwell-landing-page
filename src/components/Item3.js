// Item3.js
import React from "react";

const Item3 = ({ title, subtitle, paragraph }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <p className="pt-0 pb-8">{paragraph}</p>
      <h3 className="text-blue-500 text-lg pb-2 font-bold">{subtitle}</h3>
      <h2 className="text-black uppercase text-xs pb-0 font-semibold">
        {title}
      </h2>
    </div>
  );
};

export default Item3;
