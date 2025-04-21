import { useState, useEffect, useRef } from 'react';
import visionImage from '../../assets/images/filmingVision.png'; // Replace with your image

const OurVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update visibility based on intersection status
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.25 }
    );
    
    // Get the section element to observe
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#121212] flex justify-center items-center m-auto py-16 px-4 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Image - Animated from left */}
        <div 
          className={`w-[20rem] md:w-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          <img
            src={visionImage}
            alt="Filming Vision"
            className="w-[20rem] rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Quote box - Animated from right */}
        <div 
          className={`w-full md:w-1/2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 text-white shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base sm:text-lg leading-relaxed italic">
              "We don't just tell stories — we create experiences, capturing the soul behind every frame."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;