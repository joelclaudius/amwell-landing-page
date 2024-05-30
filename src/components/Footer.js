import React from "react";
import facebook from "../assets/images/facebook.jpg";
import ig from "../assets/images/ig.jpg";
import x from "../assets/images/x.png";
import linkedin from "../assets/images/linkedin.jpg";
import yt from "../assets/images/yt.png";
import amwell from "../assets/images/amwell.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>
          <img src={amwell} alt="amwell logo" />
        </h2>
        <p>Am well on social media:</p>
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={ig} alt="instagram" />
          </li>
          <li>
            <img src={x} alt="twitter" />
          </li>
          <li>
            <img src={linkedin} alt="linkedin" />
          </li>
          <li>
            <img src={yt} alt="youtube" />
          </li>
        </ul>
      </div>
      <section>
        <div>
          <h2>
            <a href="#">Who We Serve</a>
          </h2>
          <ul>
            <li>
              <a href="#">Providers</a>
            </li>
            <li>
              <a href="#">Payers</a>
            </li>
            <li>
              <a href="#">Government</a>
            </li>
            <li>
              <a href="#">Higher Education</a>
            </li>
            <li>
              <a href="#">See a doctor now</a>
            </li>
            <li>
              <a href="#">Join Amwell Medical Group</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            <a href="#">What We Offer</a>
          </h2>
          <ul>
            <li>
              <a href="#">Providers Solutions</a>
            </li>
            <li>
              <a href="#">Payers Solutions</a>
            </li>
            <li>
              <a href="#">Amwell Converge Platform</a>
            </li>
            <li>
              <a href="#">Speciality Consults</a>
            </li>
            <li>
              <a href="#">Provider Network</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>
            <a href="#">About Us</a>
          </h2>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Amwell</a>
            </li>
            <li>
              <a href="#">Working Here</a>
            </li>
            <li>
              <a href="#">Leadership Team</a>
            </li>
            <li>
              <a href="#">Board of Directors</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <p>
            ©2024 American Well. Amwell is a registered trademark of American
            Well Corporation.
          </p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
