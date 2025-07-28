import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start md:gap-20">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <a
            href="#Header"
            className="flex items-center gap-2 mb-2 text-white font-bold-bold"
          >
            <img className="w-8 h-8" src={assets.ozone_logo} alt="" />
            OZONE
          </a>
          <p className="text-gray-400">
            We design and build high-quality, affordable homes with expert
            craftsmanship and timely delivery. Your vision, our expertise—let’s
            create the perfect home together. Build with Ozone.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header">
              <li className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                Home
              </li>
            </a>
            <a href="#About">
              <li className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                About
              </li>
            </a>
            <a href="#Projects">
              <li className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                Projects
              </li>
            </a>
            <a href="#Testimonials">
              <li className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                Testimonials
              </li>
            </a>
            <a href="#Contact">
              <li className="text-gray-400 mb-2 hover:text-white cursor-pointer">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 max-w-80 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="py-2 px-4 bg-blue-500 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-gray-500">
        <p>Copyright 2025 @Ozone Construction. All Rights Reserved.</p>
        <p>
          Code & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/lakshan-jayantha-kumara-5158202a6/"
            className="text-blue-500 hover:underline"
          >
            Lakshan J Kumara
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
