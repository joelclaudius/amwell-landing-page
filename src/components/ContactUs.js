import React from "react";
import contactus from "../assets/images/contactus.jpg";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section className="bg-blue-500 text-white px-[380px] py-6 flex justify-between text-lg">
      <div>
        <img src={contactus} alt="Contact Us" className="h-20" />
      </div>
      <div>
        <h3>Contact us</h3>
        <p>
          Let's talk about how we can digitally empower your healthcare
          ambitions.
        </p>
      </div>
      <di>
        <button className="text-white bg-black rounded-lg size-[100px]">
          Contact us
        </button>
      </di>
    </section>
  );
};

export default ContactUs;
