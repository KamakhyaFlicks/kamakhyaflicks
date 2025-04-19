import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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
  }
];

// Define staggered animations
const directions = ['-100', '50', '50', '100']; // Left, Right, Bottom, Top (Y)

const ServicesGrid = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div className="relative w-full px-4 py-10 text-white z-10">
      <div className='absolute left-1/2 -translate-x-1/2 rotate-6 w-[180%] h-[100rem] sm:h-[50rem] md:h-[50rem] lg:h-[50rem] xl:h-[30rem] bg-green-500 z-0 rounded-lg top-[0rem] sm:top-[0rem] md:top-[0rem] lg:top-[0rem] xl:top-[2rem] overflow-hidden z-[-1]'></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <AnimatedCard
            key={index}
            service={service}
            direction={directions[index % directions.length]}
            delay={index * 0.2}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto mt-8 flex justify-end">
      <Link to="/services">
        <motion.button
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white shadow-md group hover:text-black"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[yellow] to-[yellow] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          <span className="relative z-10">Explore Services</span>
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

const AnimatedCard = ({ service, direction, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: false });

  const getInitial = () => {
    if (direction === '0') return { y: 100, opacity: 0, scale: 0.95 };
    return { x: Number(direction), opacity: 0, scale: 0.95 };
  };

  const getAnimate = () => ({ x: 0, y: 0, opacity: 1, scale: 1 });

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? getAnimate() : getInitial()}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="bg-[#121212] shadow-lg overflow-hidden border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
          <p className="text-lg text-green-400 mb-4">{service.price}</p>
        </div>
        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white shadow-md group hover:text-black">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[yellow] to-[yellow] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
          <span className="relative z-10">Enroll Now</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ServicesGrid;



// const ServicesGrid = () => {
//   const [ref, inView] = useInView({ triggerOnce: false });

//   return (
//     <div className="w-full px-4 py-10 bg-gradient-to-tl from-zinc-500 via-stone-600 to-zinc-900 text-white">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
//         {services.map((service, index) => (
//           <AnimatedCard
//             key={index}
//             service={service}
//             direction={directions[index % directions.length]}
//             delay={index * 0.2}
//           />
//         ))}
//       </div>

//       {/* Animate button */}
//       <div ref={ref} className="max-w-7xl mx-auto mt-8 flex justify-end">
//         <motion.button
//           initial={{ opacity: 0, x: 100 }}
//           animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
//           transition={{ duration: 0.7, ease: 'easeOut' }}
//           className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white shadow-md group hover:text-black"
//         >
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-gray-300 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
//           <span className="relative z-10">Explore Services</span>
//         </motion.button>
//       </div>
//     </div>
//   );
// };
