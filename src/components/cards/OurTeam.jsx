import React from 'react';
import { useState, useEffect, useRef } from 'react';
import founder from '../../assets/images/Founder.jpg'
// Mock components for social icons since we don't have react-icons
const FaLinkedin = () => <div className="w-5 h-5 text-blue-500">in</div>;
const FaTwitter = () => <div className="w-5 h-5 text-sky-400">tw</div>;
const FaInstagram = () => <div className="w-5 h-5 text-pink-500">ig</div>;

// This will be a placeholder since we don't have access to the actual image


const teamMembers = [
  {
    name: 'Mr. Dinesh Singh Rajput',
    role: 'Founder',
    image: '/api/placeholder/300/300',
    direction: 'left',
  },
  {
    name: 'Dr. Shubhanshu Singh Rajput',
    role: 'Director / Producer',
    image: founder,
    direction: 'center',
  },
  {
    name: 'Mr. Ramesh Singh Rajput',
    role: 'Co-Founder',
    image: '/api/placeholder/300/300',
    direction: 'right',
  },
];

const OurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Function to check if element is in viewport
    const checkVisibility = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 && 
        rect.bottom >= 0;
      
      // If entering view, trigger animation
      if (isInView && !isVisible) {
        setIsVisible(true);
      }
      // If no longer in view, reset animation for next scroll
      else if (!isInView && isVisible) {
        setIsVisible(false);
      }
    };
    
    // Initial check
    checkVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isVisible]);
  
  return (
    <section ref={sectionRef} className="bg-[#ffffff0d] backdrop-blur-md border border-[#ffffff1a] text-white py-18 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-yellow-500">
          Meet Our Visionary Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {teamMembers.map((member, idx) => {
            // Dynamic styles based on animation direction
            let animationClasses = "transition-all duration-700 ease-out";
            
            if (member.direction === 'left') {
              animationClasses += isVisible 
                ? " translate-x-0 opacity-100" 
                : " -translate-x-full opacity-0";
            } else if (member.direction === 'right') {
              animationClasses += isVisible 
                ? " translate-x-0 opacity-100" 
                : " translate-x-full opacity-0";
            } else {
              animationClasses += isVisible 
                ? " opacity-100 scale-100" 
                : " opacity-0 scale-95";
            }
            
            return (
              <div
                key={idx}
                className={`group bg-[#1a1a1a] overflow-hidden shadow-xl hover:shadow-2xl ${animationClasses} m-aut0 cursor-pointer`}
              >
                {/* Full Image on Top */}
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-400 text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-sky-400 hover:text-sky-300 transition-colors">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;