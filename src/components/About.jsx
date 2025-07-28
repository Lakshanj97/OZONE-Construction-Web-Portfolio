import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className=" text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 ">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg  rounded-3xl h"
          alt=""
        />
        <div className="flex flex-col item-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 pb-[20px]">
            <div>
              <p className="text-6xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-6xl font-medium text-gray-800">20+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-6xl font-medium text-gray-800">25+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-6xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className=" my-10 max-w-lg">
            <p className="text-2xl font-bold mb-4">
              Ozone Construction Company – Your Trusted Home Builder in Sri
              Lanka
            </p>
            Bringing your dream home to life through innovative design and
            skilled craftsmanship. Ozone Construction delivers durable, stylish,
            and affordable living spaces—on time and within budget.
            <p className="mt-4 font-bold text-lg">
              Build with confidence. Build with Ozone.
            </p>
          </p>
          <button className="bg-blue-500 text-white px-8 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
