import React from "react";
import contactus from "../../assets/images/contactus.jpg";

const ContactUs = () => {
  return (
    <section className="bg-blue-500 text-white px-[200px] py-10 mt-[80px] flex justify-between text-lg h-60 mb-0">
      <div>
        <img src={contactus} alt="Contact Us" className="h-20" />
      </div>
      <div>
        <h3 className="font-bold text-xl">Contact us</h3>
        <p>
          Let's talk about how we can digitally empower your healthcare
          ambitions.
        </p>
      </div>
      <di>
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Contact us
        </button>
      </di>
    </section>
  );
};

export default ContactUs;
