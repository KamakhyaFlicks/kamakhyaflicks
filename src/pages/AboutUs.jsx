import { useState } from 'react';
import { Film, Camera, Music, Star, Users, Award } from 'lucide-react';
import ourStoryImg from "../assets/images/bannerImg3.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState('producers');

  const teamMembers = {
    producers: [
      { name: "Aditya Sharma", role: "Executive Producer", bio: "With over 15 years of experience in the film industry, Aditya has produced award-winning films that have been recognized at international film festivals." },
      { name: "Priya Desai", role: "Line Producer", bio: "Priya specializes in managing production budgets and schedules. She has successfully delivered over 20 projects within time and budget constraints." },
      { name: "Rajiv Mehta", role: "Creative Producer", bio: "Rajiv has a keen eye for unique stories and has helped bring many independent filmmakers' visions to life." }
    ],
    directors: [
      { name: "Vikram Malhotra", role: "Film Director", bio: "Known for his distinct visual style and storytelling techniques, Vikram has directed critically acclaimed films across multiple genres." },
      { name: "Nandini Rao", role: "Documentary Director", bio: "Nandini's documentaries explore social issues and have been featured at Sundance and TIFF." },
      { name: "Suresh Patel", role: "Commercial Director", bio: "Suresh brings creativity to commercial projects, having directed campaigns for major national and international brands." }
    ],
    singers: [
      { name: "Ananya Mishra", role: "Playback Singer", bio: "With her versatile voice, Ananya has recorded songs in multiple languages and genres." },
      { name: "Kabir Roy", role: "Music Composer & Singer", bio: "Kabir combines traditional and contemporary elements to create unique soundtracks for films." },
      { name: "Maya Sharma", role: "Folk Singer", bio: "Maya brings authentic folk elements to film soundtracks, preserving traditional music forms in modern cinema." }
    ],
    actors: [
      { name: "Arjun Kapoor", role: "Lead Actor", bio: "Arjun is known for his versatile performances across drama, comedy, and action genres." },
      { name: "Meera Singh", role: "Character Actor", bio: "Meera brings depth to supporting roles and has been part of several award-winning ensembles." },
      { name: "Rohan Verma", role: "Emerging Talent", bio: "A promising newcomer with formal training in method acting and theater." }
    ]
  };

  return (
    <div className="min-h-screen bg-[black] text-gray-300 font-sans">
      {/* Hero Banner with Quote */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[black]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">About KamakhyaFlicks</h1>
          <div className="w-4/5 mx-auto bg-black bg-opacity-60 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
            <p className="text-xl md:text-2xl italic text-center text-gray-200">
              "Cinema is not just about telling stories; it's about creating experiences that transform perspectives and touch souls."
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section with Image */}
      <div className="bg-[#121212] container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-500">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2018, KamakhyaFlicks has emerged as a pioneering force in the film production industry, dedicated to crafting compelling narratives that resonate with audiences worldwide.
            </p>
            <p className="text-lg mb-4">
              Our journey began with a simple yet profound vision: to create authentic cinema that bridges cultural divides while maintaining artistic integrity. From independent art films to commercially viable productions, we've built a diverse portfolio that reflects our commitment to quality storytelling.
            </p>
            <p className="text-lg">
              At KamakhyaFlicks, we believe in nurturing talent, embracing innovation, and preserving the rich heritage of cinematic traditions. Our collaborative approach brings together visionaries from various disciplines to create memorable viewing experiences.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-96 lg:h-112 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
              <img 
                src={ourStoryImg} 
                alt="Film production team at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm">Our team on the set of "Ethereal Dreams" (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Film size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Film Production</h3>
              <p>From concept to screen, we handle all aspects of production with meticulous attention to detail.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Camera size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Cinematography</h3>
              <p>Our visual storytelling approach creates immersive experiences through expert framing and lighting.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Music size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Music Production</h3>
              <p>Original scores and soundtracks that enhance narrative and emotional impact.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Star size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Talent Management</h3>
              <p>Discovering and nurturing actors, directors, and technical talents across the industry.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Distribution</h3>
              <p>Strategic distribution partnerships to ensure your content reaches the right audience.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center transform transition-all duration-300 hover:bg-gray-700 hover:scale-105">
              <div className="flex justify-center mb-4">
                <Award size={48} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Festival Circuits</h3>
              <p>Guidance and representation for film festival submissions worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gray-900 container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">Meet Our Creative Team</h2>
        
        {/* Team Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          <button 
            onClick={() => setActiveTab('producers')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${activeTab === 'producers' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Producers
          </button>
          <button 
            onClick={() => setActiveTab('directors')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${activeTab === 'directors' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Directors
          </button>
          <button 
            onClick={() => setActiveTab('singers')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${activeTab === 'singers' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Singers
          </button>
          <button 
            onClick={() => setActiveTab('actors')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-all duration-300 ${activeTab === 'actors' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            Actors
          </button>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers[activeTab].map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-1">
              <div className="h-48 bg-gray-700">
                <img 
                  src={`/api/placeholder/400/300?text=${member.name}`} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <p className="text-purple-400">Feature Films Produced</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <p className="text-purple-400">International Awards</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white mb-2">40+</div>
              <p className="text-purple-400">Industry Partners</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <p className="text-purple-400">Countries Distributed In</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="bg-gray-900 container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:bg-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
            <p className="text-lg">
              To be at the forefront of cinematic innovation while preserving the authenticity of storytelling traditions. We envision a world where films transcend entertainment to become powerful catalysts for cultural dialogue and social change.
            </p>
          </div>
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg transform transition-all duration-300 hover:bg-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h3>
            <p className="text-lg">
              To create thought-provoking and emotionally resonant content that challenges perspectives and celebrates human experiences. We are committed to fostering diverse voices, supporting emerging talents, and maintaining the highest production standards.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-purple-400">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl relative transform transition-all duration-300 hover:shadow-purple-500/20">
              <div className="text-5xl text-purple-800 absolute top-4 left-4">"</div>
              <p className="text-gray-300 pt-8 pb-4">Working with KamakhyaFlicks was a transformative experience. Their dedication to artistic vision while maintaining professional standards is unmatched in the industry.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4">
                  <img src="/api/placeholder/100/100" alt="Director" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-white">Rajan Kohli</p>
                  <p className="text-sm text-purple-400">Independent Film Director</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl relative transform transition-all duration-300 hover:shadow-purple-500/20">
              <div className="text-5xl text-purple-800 absolute top-4 left-4">"</div>
              <p className="text-gray-300 pt-8 pb-4">The team at KamakhyaFlicks brings both creative brilliance and production expertise to every project. They've helped me bring my story to life with authenticity and impact.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4">
                  <img src="/api/placeholder/100/100" alt="Screenwriter" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-white">Sonia Gupta</p>
                  <p className="text-sm text-purple-400">Screenwriter</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl relative transform transition-all duration-300 hover:shadow-purple-500/20">
              <div className="text-5xl text-purple-800 absolute top-4 left-4">"</div>
              <p className="text-gray-300 pt-8 pb-4">As an investor, I appreciate KamakhyaFlicks' commitment to both artistic quality and financial responsibility. They consistently deliver productions that are both critically acclaimed and commercially viable.</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4">
                  <img src="/api/placeholder/100/100" alt="Investor" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-white">Amit Sharma</p>
                  <p className="text-sm text-purple-400">Film Investor</p>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">Whether you're an established filmmaker or taking your first steps into production, we're here to support your creative journey.</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
}