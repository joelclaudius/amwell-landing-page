import React from "react";
import sections from "../data";
import Section from "./Section";

const SectionDisplay = () => {
  return (
    <div>
      {sections.map((section) => (
        <Section
          key={section.id}
          header={section.header}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default SectionDisplay;
