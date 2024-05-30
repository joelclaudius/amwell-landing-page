import React from "react";
import search from "../assets/images/search.jpg";
import amwell from "../assets/images/amwell.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <img src={amwell} alt="amwell logo" />
        </h1>
        <ul>
          <li>
            <a href="#Who We Serve">Who We Serve</a>
          </li>
          <li>
            <a href="#What We Offer">What We Offer</a>
          </li>
          <li>
            <a href="#About Us">About Us</a>
          </li>
          <li>
            <a href="#Resources">Resources</a>
          </li>
          <li>
            <button>See Doctor</button>
          </li>
          <li>
            <button>Contact Us</button>
          </li>
          <li>
            <img src={search} alt="Search-Logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
