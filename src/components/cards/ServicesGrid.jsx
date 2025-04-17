import React from 'react';

// Sample service data with image
const services = [
  {
    title: 'Video Editing',
    price: '₹1,999',
    image: 'https://via.placeholder.com/400x250?text=Video+Editing',
  },
  {
    title: 'Poster Design',
    price: '₹499',
    image: 'https://via.placeholder.com/400x250?text=Poster+Design',
  },
  {
    title: 'Reel Making',
    price: '₹999',
    image: 'https://via.placeholder.com/400x250?text=Reel+Making',
  },
  {
    title: 'Promo Creation',
    price: '₹1,499',
    image: 'https://via.placeholder.com/400x250?text=Promo+Creation',
  },
  {
    title: 'Script Writing',
    price: '₹799',
    image: 'https://via.placeholder.com/400x250?text=Script+Writing',
  },
  {
    title: 'Voice Over',
    price: '₹599',
    image: 'https://via.placeholder.com/400x250?text=Voice+Over',
  },
  {
    title: 'Social Media Ads',
    price: '₹1,299',
    image: 'https://via.placeholder.com/400x250?text=Social+Ads',
  },
  {
    title: 'Event Coverage',
    price: '₹2,499',
    image: 'https://via.placeholder.com/400x250?text=Event+Coverage',
  },
];

const ServicesGrid = () => {
  return (
    <div className="w-full px-4 py-10 bg-[#121212] text-white">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-[10px] shadow-lg overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Image Area */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-lg text-green-400 mb-4">{service.price}</p>
              </div>
              <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-[10px] shadow-md group hover:text-black">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0 rounded-[9px]"></span>
  <span className="relative z-10">Enroll Now</span>
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
