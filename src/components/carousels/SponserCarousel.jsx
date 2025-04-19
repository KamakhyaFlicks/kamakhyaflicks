import React from 'react';
import { sponsorList1, sponsorList2 } from '../../constants/sponserLogos'; // Importing the sponsor logos

// Placeholder sponsor logos using the provided images
const SPONSORS_ROW1 = sponsorList1;

const SPONSORS_ROW2 = sponsorList2

const SponsorCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[black] py-10 mb-12">
      {/* Blur Effects */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black-50 to-transparent" />

      {/* First Row - Left to Right */}
      <div className="mb-8">
        <div className="animate-scroll-left flex">
          {/* First set */}
          {SPONSORS_ROW1.map((img) => (
            <div
              
              className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              <img
                src={img}
                alt="Sponsor"
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {SPONSORS_ROW1.map((img) => (
            <div
              
              className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              <img
                src={img}
                alt="Sponsor"
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div>
        <div className="animate-scroll-right flex">
          {/* First set */}
          {SPONSORS_ROW2.map((img) => (
            <div
              
              className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              <img
                src={img}
                alt="Sponsor"
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {SPONSORS_ROW2.map((img) => (
            <div
              
              className="mx-8 flex h-16 w-32 flex-shrink-0 items-center justify-center"
            >
              <img
                src={img}
                alt="Sponsor"
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorCarousel;