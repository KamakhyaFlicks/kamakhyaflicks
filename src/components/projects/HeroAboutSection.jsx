import React from 'react';
import { ArrowRight, Users, Award, Target, Sparkles } from 'lucide-react';

const HeroAboutSection = () => {
  // Sample images for the carousel - using placeholder images
  const carouselImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop'
  ];

  return (
    <div className="relative -top-22 min-h-screen bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-25">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm text-gray-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>About Our Journey</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Building the
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Future</span>
              </h1>
              <p className="text-sm text-gray-300 leading-relaxed  max-w-sm md:max-w-md">
                We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming ideas into extraordinary digital experiences.
              </p>
            </div>

            {/* Stats */}
            

            {/* Feature highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">   
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className='text-sm'>Collaborative team approach</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className='text-sm'>Award-winning solutions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className='text-sm'>Results-driven methodology</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className='text-sm'>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side - Infinite Carousel */}
          <div className="relative">
            <div className=" overflow-hidden rounded-2xl relative">
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
              
              {/* Infinite scrolling carousel */}
              <div className="flex animate-[scrollHorizontal_25s_linear_infinite] gap-4 w-max">
                {/* First set of images */}
                {carouselImages.map((image, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0  bg-gray-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt={`Team ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Second row */}
                
                {/* Duplicate set for seamless loop */}
                {carouselImages.map((image, index) => (
                  <div key={`third-${index}`} className="flex-shrink-0 w-48 h-32 bg-gray-800 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img 
                      src={image} 
                      alt={`Team ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAboutSection;