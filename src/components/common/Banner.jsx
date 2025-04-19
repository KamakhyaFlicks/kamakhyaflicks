import React from 'react';

export default function Banner() {
  return (
    <div className="w-full h-[60vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-200">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-60 z-0"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 md:px-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Empowering your vision with innovative solutions. Explore what we offer to elevate your business.
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-[#f4f175] text-black font-semibold rounded-md shadow-md hover:bg-white transition duration-300"
        >
          Explore Services
        </a>
      </div>
    </div>
  );
}
