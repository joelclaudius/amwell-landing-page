
import React from "react";
 import amwell from "../assets/images/amwell.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
        <h2>
            <img src={amwell} alt="amwell logo" className="h-10" />
           </h2>
          <p className="mb-4">Amwell on social media:</p>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg?t=st=1717081141~exp=1717084741~hmac=661bd2f017c6058b2fd00b1fdb5a83a4aff1b9d127c64f14788bcad93a05d160&w=740" alt="Facebook" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1717081200~exp=1717084800~hmac=a98fa53af3083eff2a127e10e03633efb3d445cafae5d82e0740986607c93c81&w=740" alt="Instagram" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-vector/new-twitter-x-logo-with-drop-shadow_1017-45419.jpg?t=st=1717081246~exp=1717084846~hmac=062fb61da0f9b1e13d0002cbb5a18c4aaeec9fee8738ee4cf51f40ba998f323d&w=740" alt="Twitter" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049587.jpg?t=st=1717081311~exp=1717084911~hmac=feb1afea395d99b9b0d9930321c6c12643cb3d89561e7559cf0733689eda0d05&w=740" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.freepik.com/free-psd/youtube-logo-icon-isolated-3d-render-illustration_47987-9790.jpg?t=st=1717081419~exp=1717085019~hmac=68a54f8f74f6a23caf4e7ab9995d720eead119ba63b8ed8ddf5cd497a6ba999a&w=740" alt="YouTube" className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="font-bold text-lg mb-4">
              <a href="#">Who We Serve</a>
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Providers</a></li>
              <li><a href="#" className="hover:underline">Payers</a></li>
              <li><a href="#" className="hover:underline">Government</a></li>
              <li><a href="#" className="hover:underline">Higher Education</a></li>
              <li><a href="#" className="hover:underline">See a doctor now</a></li>
              <li><a href="#" className="hover:underline">Join Amwell Medical Group</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">
              <a href="#">What We Offer</a>
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Providers Solutions</a></li>
              <li><a href="#" className="hover:underline">Payers Solutions</a></li>
              <li><a href="#" className="hover:underline">Amwell Converge Platform</a></li>
              <li><a href="#" className="hover:underline">Specialty Consults</a></li>
              <li><a href="#" className="hover:underline">Provider Network</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">
              <a href="#">About Us</a>
            </h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">About Amwell</a></li>
              <li><a href="#" className="hover:underline">Working Here</a></li>
              <li><a href="#" className="hover:underline">Leadership Team</a></li>
              <li><a href="#" className="hover:underline">Board of Directors</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
            </ul>
          </div>
        </section>
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
          <p className="text-sm">
            ©2024 American Well. Amwell is a registered trademark of American Well Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



