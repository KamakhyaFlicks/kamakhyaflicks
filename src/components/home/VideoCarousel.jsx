
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Sample video data - replace with your actual videos
const videos = [
  {
    id: '1',
    title: 'Corporate Documentary',
    thumbnail: 'https://img.youtube.com/vi/mOl2YsbABVQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=mOl2YsbABVQ',
    videoSrc: 'https://www.youtube.com/embed/mOl2YsbABVQ',
    description: 'A compelling corporate story that drives engagement'
  },
  {
    id: '2',
    title: 'Wedding Cinematic',
    thumbnail: 'https://img.youtube.com/vi/C5WP6X9nEGY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=C5WP6X9nEGY',
    videoSrc: 'https://www.youtube.com/embed/C5WP6X9nEGY',
    description: 'Romantic storytelling captured in stunning visuals'
  },
  {
    id: '3',
    title: 'Commercial Production',
    thumbnail: 'https://img.youtube.com/vi/lIOkyYxKQDQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=lIOkyYxKQDQ',
    videoSrc: 'https://www.youtube.com/embed/lIOkyYxKQDQ',
    description: 'High-impact commercial that converts viewers'
  },
  {
    id: '4',
    title: 'Music Video',
    thumbnail: 'https://img.youtube.com/vi/gFpqSHJwfvA/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=gFpqSHJwfvA',
    videoSrc: 'https://www.youtube.com/embed/gFpqSHJwfvA',
    description: 'Creative visual narrative synchronized with music'
  },
  {
    id: '5',
    title: 'Event Coverage',
    thumbnail: 'https://img.youtube.com/vi/wb_ah5YBjIw/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wb_ah5YBjIw',
    videoSrc: 'https://www.youtube.com/embed/wb_ah5YBjIw',
    description: 'Professional event documentation and highlights'
  },
  {
    id: '6',
    title: 'Brand Story',
    thumbnail: 'https://img.youtube.com/vi/ND9soVVdXP0/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ND9soVVdXP0',
    videoSrc: 'https://www.youtube.com/embed/ND9soVVdXP0',
    description: 'Authentic brand narrative that connects with audience'
  }
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, videos.length - slidesToShow);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === maxIndex ? 0 : prev + 1);
  };

  const canGoPrevious = videos.length > slidesToShow;
  const canGoNext = videos.length > slidesToShow;

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (window.innerWidth >= 768) return; // Only on mobile
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || window.innerWidth >= 768) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current || window.innerWidth >= 768) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX.current - endX;
    
    if (Math.abs(deltaX) > 50) { // Minimum swipe distance
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    isDragging.current = false;
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our
            <span className="text-amber-600 ml-2">Latest Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the stories we've brought to life through our lens
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative ">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-amber-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center ${
              canGoPrevious 
                ? 'hover:bg-amber-700 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            } hidden md:flex -translate-x-6`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-amber-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center ${
              canGoNext 
                ? 'hover:bg-amber-700 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            } hidden md:flex translate-x-6`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div 
            className="overflow-hidden" 
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="flex-none py-5"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 bg-card overflow-hidden shadow-md relative">
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Play Button Overlay */}
                      <div 
                        className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => openVideoModal(video)}
                      >
                        <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
     
                      {/* Golden accent line */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>

                    {/* Video Info */}
                    <div className="absolute ">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            {Array.from({ length: videos.length }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
        <a href='/projects'> 

          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300">
            View All Projects
          </button>
        </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                src={selectedVideo.videoSrc}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={closeVideoModal}
          />
        </div>
      )}
    </section>
  );
};

export default VideoCarousel;