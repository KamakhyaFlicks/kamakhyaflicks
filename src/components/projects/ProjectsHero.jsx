import React from 'react';
import { Film, Play, Layers, Award } from 'lucide-react';

const ProjectsHero = () => {
  return (
    <section className="relative -top-22 overflow-hidden pt-24 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-95"></div>
      
      {/* Floating Objects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-amber-500/10 blur-xl"></div>
        <div className="absolute bottom-20 right-[15%] w-32 h-32 rounded-full bg-amber-600/10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-gray-700/20 blur-xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-amber-500/30 blur-md"></div>
              <div className="relative bg-gray-900 p-4 rounded-full border border-amber-500/50">
                <Film className="w-8 h-8 text-amber-500" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white">
            Our <span className="text-amber-500">Creative</span> Works
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bringing stories to life through captivating visuals and immersive experiences
          </p>
        </div>
        
        {/* Stats/Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div className="flex flex-col items-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-amber-500/10 mb-4">
              <Play className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Music Videos</h3>
            <p className="text-gray-400 text-center">Cinematic storytelling through rhythm and visuals</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-amber-500/10 mb-4">
              <Layers className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Web Series</h3>
            <p className="text-gray-400 text-center">Engaging narratives that captivate audiences</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-amber-500/10 mb-4">
              <Award className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Live Events</h3>
            <p className="text-gray-400 text-center">Spectacular productions that leave lasting impressions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;