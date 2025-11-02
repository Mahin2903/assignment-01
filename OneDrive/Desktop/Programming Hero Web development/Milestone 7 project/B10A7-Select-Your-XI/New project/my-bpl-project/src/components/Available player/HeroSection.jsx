// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({heroBg, heroImg}) => {
  return (
    <div className="relative w-full flex justify-center items-center bg-black rounded-3xl overflow-hidden py-16 px-8">
      {/* Background overlay image */}
      <img
        src={heroBg}
        alt="background shadow"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

    

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white max-w-3xl space-y-4">
        {/* Logo */}
        <img src={heroImg} alt="Cricket logo" className="w-36 mb-4" />

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Button */}
        <button className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-xl border border-yellow-300 shadow-[0_0_15px_rgba(255,255,0,0.5)] transition">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
