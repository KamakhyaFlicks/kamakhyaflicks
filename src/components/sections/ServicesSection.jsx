
import React, { useState, useEffect, useRef } from 'react';
import service1 from '../../assets/images/service1.jpg';
import service2 from '../../assets/images/service2.jpg';
import service3 from '../../assets/images/service3.webp';
import service4 from '../../assets/images/service4.jpg';
import service5 from '../../assets/images/service5.jpg';
import service6 from '../../assets/images/service6.jpg';
// Mock component for GSAP functionality since we don't have actual GSAP here
const mockGSAP = (ref, animation, options) => {
  // This would be replaced by actual GSAP in your implementation
};

export default function ServicesSection() {
  const services = [
    {
      title: "ACTING CLASSES",
      description: "At Kamakhya Flicks, We Nurture Raw Talent Into Confident Performers Through Our Professional Acting Classes. Guided By Industry Experts, Students Learn The Art Of Expression, Dialogue, And On-Screen Presence. Whether You're A Beginner Or A Dreamer, Your Journey To Stardom Starts Here.",
      alignment: "right",
      icon: "🎭",
      color: "from-purple-900 to-indigo-900",
      imgSrc: service1
    },
    {
      title: "DIRECTION",
      description: "Unlock The Director Within At Kamakhya Flicks. Learn The Complete Process Of Filmmaking — From Script To Screen — With Guidance From Experienced Mentors. Craft Stories That Move Audiences And Make A Mark.",
      alignment: "left",
      icon: "🎬",
      color: "from-red-900 to-rose-900",
      imgSrc: service2
    },
    {
      title: "MODELLING",
      description: "Transform Your Presence And Poise With Our Professional Modelling Program. Our Industry-Connected Mentors Will Guide You Through Portfolio Development, Runway Techniques, And Camera Confidence. Discover The Skills That Make Models Stand Out In A Competitive Industry.",
      alignment: "right",
      icon: "👤",
      color: "from-blue-900 to-cyan-900",
      imgSrc: service3
    },
    {
      title: "CASTING",
      description: "Connect With The Right Talent For Your Projects Through Our Extensive Casting Network. We Help Productions Find The Perfect Fit For Every Role, From Lead Characters To Supporting Ensembles. Our Casting Process Ensures The Right Chemistry And Authenticity For Your Vision.",
      alignment: "left",
      icon: "🔍",
      color: "from-amber-900 to-yellow-800",
      imgSrc: service4
    },
    {
      title: "CINEMATOGRAPHY",
      description: "Master The Art And Science Of Visual Storytelling With Our Cinematography Program. Learn To Paint With Light, Compose Powerful Frames, And Capture Emotions Through The Lens. Our Hands-On Training Equips You With Technical Skills And Creative Vision Needed For Modern Filmmaking.",
      alignment: "right",
      icon: "📷",
      color: "from-green-900 to-emerald-900",
      imgSrc: service5
    },
    {
      title: "COMMUNICATION",
      description: "Develop The Power Of Effective Communication For Screen And Beyond. Our Specialized Workshops Focus On Voice Modulation, Public Speaking, And Media Presence. Gain The Confidence To Express Your Ideas Clearly And Captivate Any Audience.",
      alignment: "left",
      icon: "🎙️",
      color: "from-pink-900 to-fuchsia-900",
      imgSrc: service6
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen perspective-1000">
      <div className="relative overflow-hidden">
        {/* Cinematic background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-yellow-500/10 to-transparent"></div>
        
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          
          
          <div className="space-y-32">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                alignment={service.alignment}
                icon={service.icon}
                color={service.color}
                imgSrc={service.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ title, description, alignment, index, icon, color , imgSrc}) => {
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Monitor when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {  
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  // Handle 3D effect on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;
    
    setMousePosition({ x: rotateY, y: rotateX });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
  
  const animationClasses = isInView 
    ? "opacity-100 translate-y-0" 
    : alignment === "right" 
      ? "opacity-0 translate-x-24"
      : "opacity-0 -translate-x-24";
    
  const transformStyle = {
    transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
    transition: 'transform 0.2s ease-out'
  };
  
  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} 
        ${animationClasses} transition-all duration-1000 ease-out`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image side with 3D effect */}
      <div className="w-full md:w-1/2 p-4 relative overflow-hidden">
        <div style={transformStyle} className="h-full w-full shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out"></div>
          
          {/* Before/After slide effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/80 opacity-60"></div>
          
          <img
            src={imgSrc}
            alt={`${title} Image`}
            className="w-full h-full object-cover scale-105 transition-transform group-hover:scale-110 duration-700"
          />
          
          {/* Icon overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out scale-50 group-hover:scale-100 rotate-12 group-hover:rotate-0">
            {icon}
          </div>
        </div>
      </div>

      {/* Content side with dynamic background */}
      <div
        className={`w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden
          ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 delay-300`}
      >
        {/* Dynamic gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`}></div>
        
        {/* Content with additional depth effects */}
        <div className="relative z-10">
          <span className="inline-block text-yellow-300 text-sm font-semibold tracking-widest mb-2">EXPLORE</span>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">{title}</h3>
          
          <div className="h-1 w-16 bg-yellow-400 mb-6 rounded transform origin-left transition-all duration-500 ease-out"></div>
          
          <p className="mb-8 text-gray-100">{description}</p>
          
          {/* Animated button */}
          <div className="relative group inline-block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <button className="relative bg-black px-6 py-3 rounded-lg flex items-center space-x-2 group overflow-hidden">
              <span className="pr-2 relative z-10 text-white group-hover:text-yellow-300 transition-colors duration-300">Enroll Now</span>
              <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-yellow-400">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};