import React from "react";
import bg from "../../assets/bg4.jpeg";
import Navbar from "../layout/Navbar";

const Banner = () => {
  return (
    <div
      className="relative h-125 w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Because Your Loved Ones Deserve the Best
        </h1>

        <p className="mb-6 text-lg md:text-xl">
          Easily connect with verified caregivers for elderly support,
          babysitting, and home assistance.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          All Services
        </button>
      </div>
    </div>
  );
};

export default Banner;
