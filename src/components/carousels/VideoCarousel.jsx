import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const videos = [
  'https://www.youtube.com/embed/mOl2YsbABVQ?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/C5WP6X9nEGY?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/lIOkyYxKQDQ?rel=0&modestbranding=1&controls=1',
  'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0&modestbranding=1&controls=1',
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = videos.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="w-full px-4 py-10 bg-[#121212] text-white ">

      <div className="max-w-7xl sm:w-full mx-auto relative flex justify-center items-center">
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src={videos[currentIndex]}
            title={`video-${currentIndex}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 p-2 sm:p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
