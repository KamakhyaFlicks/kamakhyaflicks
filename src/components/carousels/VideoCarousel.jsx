import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  'https://www.youtube.com/embed/mOl2YsbABVQ?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/C5WP6X9nEGY?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/lIOkyYxKQDQ?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0&modestbranding=1&controls=1',
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  const total = videos.length;

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setFade(true);
    }, 200);
  };

  // GSAP animation for video transitions
  const triggerAnimation = (index) => {
    const video = videoRefs.current[index];
    
    // Reset all other videos
    videoRefs.current.forEach((el, i) => {
      if (i !== index) {
        gsap.set(el, {
          opacity: 0.4,
          scale: 0.8,
          zIndex: 0,
          x: i === index + 1 ? 50 : -50,
        });
      }
    });

    // Animate the video coming to the front
    gsap.to(video, {
      opacity: 1,
      scale: 1,
      zIndex: 10,
      duration: 0.6,
      ease: 'power2.out',
    });

    // Reset the scale back to 1 after the animation
    gsap.to(video, {
      scale: 1,
      duration: 0.3,
      delay: 0.6,
    });
  };

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reset', // reset so it triggers again
        },
      }
    );
  }, []);

  useEffect(() => {
    triggerAnimation(currentIndex);
  }, [currentIndex]);

  return (
    <div ref={sectionRef} className="relative w-full px-4 py-10 text-white">
      <div className="absolute left-1/2 -translate-x-1/2 -rotate-8 
  w-[150%] h-[15rem] sm:h-[10rem] md:h-[25rem] lg:h-[30rem] xl:h-[45rem] 
  bg-yellow-400 z-0 rounded-lg top-[1rem] sm:top-[5rem] md:top-[3rem] lg:top-[5rem] xl:top-[1rem]">
</div>
      <div className="max-w-7xl sm:w-full mx-auto relative flex justify-center items-center">
      <div className="relative w-full pb-[56.25%] bg-black overflow-hidden shadow-lg border border-gray-700 ">
      
  {videos.map((videoUrl, index) => (
    <div
      key={index}
      ref={(el) => (videoRefs.current[index] = el)}
      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
        index === currentIndex
          ? 'opacity-100 z-10 scale-100'
          : 'opacity-40 z-0 scale-90'
      }`}
    >
      <iframe
        src={videoUrl}
        title={`video-${index}`}
        className="w-full h-full flex items-center justify-center"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ))}
</div>


        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 p-4 sm:p-5 rounded-full text-white hover:bg-black/70 transition opacity-80 z-20"
        >
          <FaChevronLeft size={30} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 p-4 sm:p-5 rounded-full text-white hover:bg-black/70 transition opacity-80 z-20"
        >
          <FaChevronRight size={30} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              if (i !== currentIndex) {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setFade(true);
                }, 200);
              }
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              i === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
