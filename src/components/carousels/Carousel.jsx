import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../../assets/images/bannerImg2.jpg';
import banner2 from '../../assets/images/bannerImg1.jpg';
import banner3 from '../../assets/images/bannerImg3.jpg';
import banner4 from '../../assets/images/bannerImg4.jpg';

// Banner data with image paths
const banners = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Discover our new arrivals for the summer season",
    imageUrl: banner1, // Replace with your image path
    ctaText: "Shop Now"
  },
  {
    id: 2,
    title: "Special Offer",
    description: "Get up to 40% off on selected items",
    imageUrl: banner2, // Replace with your image path
    ctaText: "View Deals"
  },
  {
    id: 3,
    title: "New Technology",
    description: "Experience the future with our latest gadgets",
    imageUrl: banner3, // Replace with your image path
    ctaText: "Explore"
  },
  {
    id: 4,
    title: "Home Decor",
    description: "Transform your space with our exclusive collection",
    imageUrl: banner4, // Replace with your image path
    ctaText: "Discover"
  }
];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Handle auto slide
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlaying]);
  
  // Pause auto slide on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);
  
  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };
  
  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };
  
  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex justify-center py-4 bg-[#121212] lg:h-[70vh] md:h-[60vh] sm:h-[100vh] h-[60vh]">
      <div 
        className="w-full relative overflow-hidden shadow-lg"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Banner Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out w-full lg:h-[70vh] md:h-[60vh] sm:h-[100vh] h-[60vh]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div 
              key={banner.id} 
              className="w-full h-full flex-shrink-0 relative lg:h-[70vh] md:h-[60vh] sm:h-[100vh] h-[60vh]"
            >
              <div className="relative aspect-[21/9] w-full  md:aspect-[21/9] lg:aspect-[21/7] lg:h-[70vh] md:h-[60vh] sm:h-[100vh] h-[60vh]">
                {/* Using placeholder for demo, replace with your image */}
                <img 
                  src={banner.imageUrl || "/api/placeholder/1200/600"} 
                  alt={banner.title} 
                  className="absolute w-full h-full object-cover "
                />
                
                {/* Gradient overlay */}
                <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                  <div className="text-white p-4 sm:p-6 md:p-8 lg:p-12 max-w-md">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{banner.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 md:mb-6 opacity-90 line-clamp-2 md:line-clamp-none">
                      {banner.description}
                    </p>
                    <button className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium hover:bg-opacity-90 transition-all text-sm sm:text-base">
                      {banner.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Buttons - Made larger on mobile */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        {/* Indicators - Larger and more visible on mobile */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-white w-5 sm:w-8' 
                  : 'bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Auto-play indicator */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center space-x-1">
          <div className={`w-1 h-1 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-red-400'}`}></div>
          <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-full">
            {isAutoPlaying ? 'Auto' : 'Paused'}
          </span>
        </div>
      </div>
    </div>
  );
}