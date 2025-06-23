import React from 'react';
import ourvision from '../../assets/images/visionimage.jpg';
const OurVision = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Vision Content - Left Side */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our
                <span className="text-amber-600 ml-2">Vision</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg lg:text-xl font-light">
                We envision a world where every story deserves to be told with exceptional clarity, 
                creativity, and impact.
              </p>
              
              <p className="text-base lg:text-lg">
                Through innovative cinematography and cutting-edge technology, we transform ideas into 
                compelling visual narratives that resonate with audiences and create lasting connections.
              </p>
            </div>
            
            {/* Vision Values */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900">Innovation</h3>
                <p className="text-sm text-gray-600">New technologies & creative approaches</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-gray-900">Excellence</h3>
                <p className="text-sm text-gray-600">Exceptional quality in every frame</p>
              </div>
            </div>
          </div>
          
          {/* Vision Image - Right Side */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[5/4] lg:aspect-[4/3] overflow-hidden shadow-xl">
                <img
                  src={ourvision}
                  alt="Our vision - Creative team at work"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Accent Border */}
              <div className="absolute inset-0  ring-1 ring-amber-600/10"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 bg-white  shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Projects</div>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;