import React, { useState, useEffect } from 'react';



const slides = [
  {
    id: 1,
    title: "Creative Vision",
    subtitle: "Bringing your ideas to life through innovative storytelling",
    backgroundImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&h=1080&fit=crop"
  },
  {
    id: 2,
    title: "Professional Excellence",
    subtitle: "Award-winning production quality that exceeds expectations",
    backgroundImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=1080&fit=crop"
  },
  {
    id: 3,
    title: "Modern Cinematography",
    subtitle: "Cutting-edge technology meets artistic vision",
    backgroundImage: "https://images.unsplash.com/photo-1489599187036-05d01df82eed?w=1920&h=1080&fit=crop"
  },
  {
    id: 4,
    title: "Visual Storytelling",
    subtitle: "Every frame tells a story worth sharing",
    backgroundImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop"
  }
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;