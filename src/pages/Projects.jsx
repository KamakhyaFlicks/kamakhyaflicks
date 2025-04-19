import React from 'react';
import { motion } from 'framer-motion';

const movies = [
  { title: 'Echoes of Silence', year: '2022', type: 'Previous', description: 'A mysterious thriller exploring the depths of the human psyche.' },
  { title: 'Rise of Shadows', year: '2023', type: 'Previous', description: 'A gripping tale of power and betrayal.' },
  { title: 'Tomorrows Light', year: '2024', type: 'Upcoming', description: 'An inspiring journey of hope set in a post-apocalyptic world.' },
  { title: 'Digital Souls', year: '2025', type: 'Upcoming', description: 'Sci-fi meets emotions in a tech-dominated world.' },
  { title: 'Whispers in the Wind', year: '2023', type: 'Previous', description: 'A heartfelt story of love and loss.' }
];

const Project = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-12 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Projects Timeline</h2>

      {/* Timeline Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full z-0"></div>

      {/* Project Items */}
      <div className="relative z-10 flex flex-col gap-16">
        {movies.map((movie, index) => {
          const isLeft = index % 2 === 0;
          const isUpcoming = movie.type === 'Upcoming';

          return (
            <motion.div
              key={index}
              initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`w-full flex flex-col md:flex-row items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className={`bg-[#1e1e1e] shadow-lg p-6 rounded-xl w-full md:w-1/2 relative border-l-4 border-yellow-400 ${isLeft ? 'md:ml-16' : 'md:mr-16'}`}>
                <h3 className="text-2xl font-semibold text-yellow-300">{movie.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{movie.year} — {movie.type}</p>
                <p className="text-base text-white">{movie.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
