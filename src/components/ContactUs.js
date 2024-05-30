import React from "react";
import contactus from "../assets/images/contactus.jpg";
import Button from "./Button";

const ContactUs = () => {
  return (
    <section id="features">
      <div>
        <img src={contactus} alt="Contact Us" />
      </div>
      <div>
        <h3>Contact us</h3>
        <p>
          Let's talk about how we can digitally empower your healthcare
          ambitions.
        </p>
      </div>
      <di>
        <Button>Contact us</Button>
      </di>
    </section>
  );
};

export default ContactUs;
