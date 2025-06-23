import React, { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
import { Camera, Film, Clapperboard } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Movie Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100">
        
        {/* Movie Production Elements - Spread away from center */}
        {/* Top Left Quadrant */}
        <div 
          className="absolute top-16 left-16 text-amber-600/40"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` }}
        >
          <Camera size={64} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-32 left-32 text-yellow-600/50"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.1}deg)` }}
        >
          <Film size={52} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-48 left-20 text-orange-500/45"
          style={{ transform: `translateY(${scrollY * 0.22}px) rotate(${12 + scrollY * 0.1}deg)` }}
        >
          <Clapperboard size={48} strokeWidth={1.5} />
        </div>

        {/* Top Right Quadrant */}
        <div 
          className="absolute top-20 right-20 text-amber-500/50"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${-scrollY * 0.08}deg)` }}
        >
          <Camera size={48} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-40 right-32 text-yellow-600/45"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.1}deg)` }}
        >
          <Film size={52} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute top-24 right-16 text-orange-600/40"
          style={{ transform: `translateY(${scrollY * -0.18}px) rotate(${-12 + scrollY * 0.08}deg)` }}
        >
          <Clapperboard size={40} strokeWidth={1.5} />
        </div>

        {/* Bottom Left Quadrant */}
        <div 
          className="absolute bottom-32 left-24 text-amber-600/60"
          style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.12}deg)` }}
        >
          <Camera size={56} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-48 left-40 text-yellow-500/40"
          style={{ transform: `translateY(${scrollY * -0.12}px) rotate(${-scrollY * 0.18}deg)` }}
        >
          <Film size={36} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-20 left-16 text-orange-500/45"
          style={{ transform: `translateY(${scrollY * -0.14}px) rotate(${scrollY * -0.12}deg)` }}
        >
          <Clapperboard size={44} strokeWidth={1.5} />
        </div>

        {/* Bottom Right Quadrant */}
        <div 
          className="absolute bottom-40 right-28 text-amber-500/35"
          style={{ transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * -0.1}deg)` }}
        >
          <Camera size={40} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-24 right-16 text-yellow-600/55"
          style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.15}deg)` }}
        >
          <Film size={60} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-56 right-24 text-orange-600/50"
          style={{ transform: `translateY(${scrollY * 0.16}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <Clapperboard size={52} strokeWidth={1.5} />
        </div>

        {/* Far edges for more spread */}
        <div 
          className="absolute top-16 left-1/4 text-amber-400/35"
          style={{ transform: `translateY(${scrollY * 0.25}px) rotate(${scrollY * 0.15}deg)` }}
        >
          <Camera size={32} strokeWidth={1.5} />
        </div>
        <div 
          className="absolute bottom-20 right-1/4 text-yellow-500/40"
          style={{ transform: `translateY(${scrollY * -0.16}px) rotate(${scrollY * -0.1}deg)` }}
        >
          <Film size={38} strokeWidth={1.5} />
        </div>

        {/* Floating golden shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-32 right-1/4 w-40 h-40 bg-yellow-400/25 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        
        {/* Enhanced grid pattern overlay with golden tint */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(245 158 11) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight">
            Creating
            <span className="block text-amber-600">Visual Stories</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-muted-foreground mt-4">
              That Move Hearts
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional movie production house bringing your vision to life with 
            cutting-edge cinematography and creative excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              size="lg" 
              className="px-8 py-6 text-lg font-medium min-w-[200px] bg-amber-600 hover:bg-amber-700"
            >
              Explore Our Work
            </button>
            <button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-medium min-w-[200px] bg-background/80 backdrop-blur-sm border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;