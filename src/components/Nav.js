import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-100  text-lg py-3 ">
      <ul className="flex items-center justify-between py-2 pl-4 pr-[600px] text-lg">
        <li>
          <a href="#Who We Serve">See All</a>
        </li>
        <li>
          <a href="#What We Offer">News</a>
        </li>
        <li>
          <a href="#About Us">Webinars</a>
        </li>
        <li>
          <a href="#Resources">Blog</a>
        </li>
        <li>
          <a href="#Resources">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
