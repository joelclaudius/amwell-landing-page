import React from "react";
import BeyondTelehealth from "./BeyondTelehealth";
import ClientEmpowerment from "./ClientEmpowerment";
import WhyAmwell from "./WhyAmwell";
import Section from "./Section";
import Section3 from "./Section3";
import Section4 from "./Section4";
import "../../styles.css";
import sections from "../../data";
import section3 from "../../data1";

const Main = () => {
  return (
    <main>
      <BeyondTelehealth />
      <WhyAmwell />
      <ClientEmpowerment />
      <Section header={sections[0].header} items={sections[0].items} />
      <Section header={sections[1].header} items={sections[1].items} />
      <Section3 header={section3[0].header} items={section3[0].items} />
      <Section4 header={sections[2].header} items={sections[2].items} />
    </main>
  );
};

export default Main;
