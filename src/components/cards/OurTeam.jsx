import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import founder from '../../assets/images/founder.jpg';
const teamMembers = [
  {
    name: 'Mr. Dinesh Singh Rajput',
    role: 'Founder',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    name: 'Dr. Shubhanshu Singh Rajput',
    role: 'Director / Producer',
    image: founder,
  },
  {
    name: 'Mr. Ramesh Singh Rajput',
    role: 'Co-Founder',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const OurTeam = () => {
  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-yellow-100">
          Meet Our Visionary Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              {/* Full Image on Top */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-yellow-400 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-blue-500 hover:text-blue-400">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-pink-500 hover:text-pink-400">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-sky-400 hover:text-sky-300">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
