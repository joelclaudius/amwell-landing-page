import React from "react";
import search from "../assets/images/search.jpg";
import amwell from "../assets/images/amwell.svg";

const Header = () => {
  return (
    <nav className="bg-blue-950 flex items-center px-[380px] py-6 justify-between">
      <div className="mr-8">
      
            <img src={amwell} alt="amwell logo" className="h-10" />
           
      </div>
      <ul className="flex items-center space-x-8 text-white text-">
        <li>
          <a href="#Who We Serve" className="hover:text-gray-200">
            Who We Serve
          </a>
        </li>
        <li>
          <a href="#What We Offer" className="hover:text-gray-200">
            What We Offer
          </a>
        </li>
        <li>
          <a href="#About Us" className="hover:text-gray-200">
            About Us
          </a>
        </li>
        <li>
          <a href="#Resources" className="hover:text-gray-200">
            Resources
          </a>
        </li>
        <li>
          <button className="border-solid text- px-6 py-3 rounded-lg hover:bg-gray-200">
            See Doctor
          </button>
        </li>
        <li>
          <button className=" text-white px-6 py-3 rounded-lg hover:bg-gray-200">
            Contact Us
          </button>
        </li>
        <li>
          <img src={search} alt="Search-Logo" className="h-8" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
