import React from 'react';
import bannervideo from "../../assets/videos/bannerVideo.mp4";
const VideoHeroBanner = () => {
  return (
    <section className="relative -top-22 h-screen w-full overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bannervideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 " />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4">
        <div className=" text-white w-xl ">
          {/* Main Quote/Vision */}
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight leading-tight">
            Creating Stories That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Inspire & Transform
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-md md:text-xl font-light opacity-90 mb-8 mx-auto leading-relaxed">
            Where creativity meets technology. We craft cinematic experiences that captivate audiences and bring your vision to life.
          </p>

          {/* Call to Action Button */}
          <a href='/register'>
          <button className="bg-white text-black px-5 md:px-8 py-2 md:py-4 text-sm md:text-lg  font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Enroll in Our Production
          </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white text-sm opacity-75">Scroll Down</span>
          <div className="w-px h-8 bg-white opacity-50 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroBanner;
