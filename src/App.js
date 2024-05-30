import React from "react";
import Header from "./components/Header";
import Telehealth from '../src/components/Main/telehealth';
import BeyondTelehealth from '../src/components/Main/BeyondTelehealth';
import "tailwindcss/tailwind.css"
import WhyAmwell from '../src/components/Main/WhyAmwell';
import ClientEmpowerment from '../src/components/Main/ClientEmpowerment';
// import ExploreTech from '../src/components/Main/ExploreTech';
// import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import "./styles.css";
import sections from "./data";
import section3 from "./data1";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Telehealth/>
      <BeyondTelehealth/>
       <WhyAmwell/>
       <ClientEmpowerment/>
       {/* <ExploreTech/> */}
      {/* <HeroSection /> */}
      <Section header={sections[0].header} items={sections[0].items} />
      <Section header={sections[1].header} items={sections[1].items} />
      <Section3 header={section3[0].header} items={section3[0].items} />
      <Section4 header={sections[2].header} items={sections[2].items} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
