// src/pages/Home.jsx
import React from 'react';
import Carousel from '../components/carousels/Carousel';
import { FaRegMap } from "react-icons/fa";

import VideoCarousel from '../components/carousels/VideoCarousel';
import ServicesGrid from '../components/cards/ServicesGrid';
import TestimonialCarousel from '../components/carousels/TestimonialCarousel';
import OurTeam from '../components/cards/OurTeam';
import OurVision from '../components/sections/OurVision';

const Home = () => {

  return (
    <div className="bg-[#121212] color-yellow w-[95%] m-auto">
      <main>
        <Carousel/>
        
        <h2 className="text-3xl font-bold text-center text-yellow-200 mb-8 mt-8">Our Work</h2>
        <VideoCarousel/>
        <h2 className="text-3xl font-bold text-center text-yellow-200 mb-8 mt-8">Our Services</h2>
        <ServicesGrid/>
        <TestimonialCarousel/>
        <OurTeam/>
        <OurVision/>

        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-lg">
        
          <h2 className="text-3xl font-bold text-center text-yellow-200 mb-8 mt-8">Find Us Here</h2>
          
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2021223648553!2d77.21723251049605!3d28.563692687103035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ade67933588dda9%3A0xe46bb16d5c48903!2sKammakhya%20Flicks!5e0!3m2!1sen!2sin!4v1744892768758!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </div>
      
      </main>
    </div>
  );
};

export default Home;
