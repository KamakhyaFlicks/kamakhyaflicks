import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    text: "Working with this team has completely transformed our digital presence. The attention to detail and creative solutions exceeded our expectations!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    text: "The product has streamlined our workflow by 40%. The interface is intuitive and the customer support team is always available when we need help.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Creative Director",
    text: "I've worked with many agencies over the years, but none have delivered results as consistently as this team. Highly recommended for any creative project.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CFO",
    text: "The ROI we've seen since implementing this solution has been impressive. Our productivity has increased while costs have gone down significantly.",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Product Manager",
    text: "The team's ability to understand our vision and translate it into an effective strategy made all the difference. Our product launch was a massive success!",
  },
  {
    id: 6,
    name: "David Thompson",
    role: "Startup Founder",
    text: "As a startup, finding the right partners is crucial. This team provided the expertise and support we needed to scale quickly and efficiently.",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  // Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Set visibility state based on intersection
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsToShow]);

  return (
    <div ref={carouselRef} className="w-full py-12 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold text-center text-yellow-200 mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
        }`}>
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-3 w-full transition-all duration-500 ${
                    isVisible ? 'animate-fadeIn' : 'opacity-0'
                  }`}
                  style={{ 
                    width: `${100 / cardsToShow}%`, 
                    animationDelay: `${(index % cardsToShow) * 0.15}s`, 
                    animationFillMode: "forwards" 
                  }}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col transform transition-transform hover:scale-[1.03] hover:shadow-2xl duration-500">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <div className="text-blue-500 font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow">{testimonial.text}</p>
                    <div className="flex mt-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-500 ${
              isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className={`flex justify-center mt-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}>
            {[...Array(testimonials.length - cardsToShow + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}