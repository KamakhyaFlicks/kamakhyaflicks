import { useState, useEffect } from 'react';

export default function Projects() {
  // Sample movie data
  const previousProjects = [
    {
      id: 1,
      title: "Cosmic Odyssey",
      year: 2023,
      director: "Maria Johnson",
      description: "A mind-bending journey through space and time that challenges our understanding of reality.",
      image: "/api/placeholder/400/225", // 16:9 ratio placeholder
      genres: ["Sci-Fi", "Adventure"]
    },
    {
      id: 2,
      title: "The Silent Echo",
      year: 2022,
      director: "James Wilkins",
      description: "A psychological thriller about a detective who discovers unsettling patterns in a series of mysterious disappearances.",
      image: "/api/placeholder/400/225",
      genres: ["Thriller", "Mystery"]
    },
    {
      id: 3,
      title: "Beyond the Horizon",
      year: 2021,
      director: "Sophia Chen",
      description: "An epic tale of exploration and discovery set in a post-apocalyptic world where hope seems lost.",
      image: "/api/placeholder/400/225",
      genres: ["Drama", "Action"]
    },
  ];

  const upcomingProjects = [
    {
      id: 4,
      title: "Whispers in the Dark",
      year: 2025,
      director: "Robert Nolan",
      description: "A haunting supernatural horror that explores the thin veil between our world and what lies beyond.",
      image: "/api/placeholder/400/225",
      genres: ["Horror", "Supernatural"]
    },
    {
      id: 5,
      title: "Parallel Hearts",
      year: 2026,
      director: "Elena Martinez",
      description: "A romantic drama set across parallel universes where two souls are destined to find each other despite the odds.",
      image: "/api/placeholder/400/225",
      genres: ["Romance", "Drama"]
    },
  ];

  // For animation - track visible elements
  const [visibleElements, setVisibleElements] = useState({});

  useEffect(() => {
    // Set initial state to show all items on first render
    const initialState = {};
    [...previousProjects, ...upcomingProjects].forEach(movie => {
      initialState[`movie-${movie.id}`] = false;
    });
    setVisibleElements(initialState);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    // Slight delay to ensure DOM elements are ready
    setTimeout(() => {
      document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
      });
    }, 100);

    return () => {
      document.querySelectorAll('.timeline-item').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  const MovieCard = ({ movie, index, type }) => {
    const isEven = index % 2 === 0;
    const position = type === 'previous' ? 
      (isEven ? 'left' : 'right') : 
      (isEven ? 'right' : 'left');
    
    const isVisible = visibleElements[`movie-${movie.id}`];
    
    return (
      <div 
        id={`movie-${movie.id}`}
        className={`timeline-item relative mb-16 md:mb-24 ${
          position === 'left' ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12'
        } w-full md:w-1/2 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isVisible ? (position === 'left' ? 'translate-x-0' : 'translate-x-0') : 
                     (position === 'left' ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
          <div className="relative">
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 m-2 rounded-full">
              {movie.year}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{movie.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Directed by {movie.director}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres.map(genre => (
                <span key={genre} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
            <p className="text-gray-700">{movie.description}</p>
          </div>
        </div>
        
        {/* Timeline connector */}
        <div className={`hidden md:block absolute top-1/2 ${
          position === 'left' ? 'right-0' : 'left-0'
        } w-12 h-0.5 bg-gray-300`}></div>
        
        <div className={`hidden md:block absolute top-1/2 ${
          position === 'left' ? 'right-0' : 'left-0'
        } transform -translate-y-1/2 ${
          position === 'left' ? '-translate-x-6' : 'translate-x-6'
        } w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-lg`}></div>
      </div>
    );
  };

  // Alternative approach - simpler animation that should work more reliably
  return (
    <div className="bg-[#121212] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto xl:max-w-[90%]">
                <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]  mb-16">
        <img
            src="https://images.unsplash.com/photo-1582719478185-2d08784f1f1d?auto=format&fit=crop&w=1600&q=80"
            // Replace with a real image URL or your own banner image
            alt="Our Projects Banner"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-yellow-400 bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Our Creative Journey</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
            "Every frame tells a story, every project is a dream realized."
            </p>
        </div>
        </div>

        {/* Previous Projects Section */}
        <section className="mb-24 ">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Previous Projects</h2>
          
          <div className="relative">
            {/* Center Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
            
            <div>
              {previousProjects.map((movie, index) => {
                const isEven = index % 2 === 0;
                const position = isEven ? 'left' : 'right';
                
                return (
                  <div key={movie.id} className="relative">
                    <div 
                      id={`movie-${movie.id}`}
                      className={`timeline-item relative mb-16 md:mb-24 ${
                        position === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      } md:w-1/2 w-full transition-all duration-1000 ease-out`}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                        <div className="relative">
                          <img 
                            src={movie.image} 
                            alt={movie.title} 
                            className="w-full h-48 sm:h-64 object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 m-2 rounded-full">
                            {movie.year}
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{movie.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">Directed by {movie.director}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {movie.genres.map(genre => (
                              <span key={genre} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {genre}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-700">{movie.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline connector */}
                      <div className={`hidden md:block absolute top-1/2 ${
                        position === 'left' ? 'right-0' : 'left-0'
                      } w-12 h-0.5 bg-gray-300`}></div>
                      
                      <div className={`hidden md:block absolute top-1/2 ${
                        position === 'left' ? 'right-0' : 'left-0'
                      } transform -translate-y-1/2 ${
                        position === 'left' ? '-translate-x-6' : 'translate-x-6'
                      } w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-lg`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Upcoming Projects Section */}
        <section >
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Upcoming Projects</h2>
          
          <div className="relative">
            {/* Center Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
            
            <div>
              {upcomingProjects.map((movie, index) => {
                const isEven = index % 2 === 0;
                const position = isEven ? 'right' : 'left';
                
                return (
                  <div key={movie.id} className="relative">
                    <div 
                      id={`movie-${movie.id}`}
                      className={`timeline-item relative mb-16 md:mb-24 ${
                        position === 'left' ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                      } md:w-1/2 w-full transition-all duration-1000 ease-out`}
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                        <div className="relative">
                          <img 
                            src={movie.image} 
                            alt={movie.title} 
                            className="w-full h-48 sm:h-64 object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 m-2 rounded-full">
                            {movie.year}
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">{movie.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">Directed by {movie.director}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {movie.genres.map(genre => (
                              <span key={genre} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {genre}
                              </span>
                            ))}
                          </div>
                          <p className="text-gray-700">{movie.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline connector */}
                      <div className={`hidden md:block absolute top-1/2 ${
                        position === 'left' ? 'right-0' : 'left-0'
                      } w-12 h-0.5 bg-gray-300`}></div>
                      
                      <div className={`hidden md:block absolute top-1/2 ${
                        position === 'left' ? 'right-0' : 'left-0'
                      } transform -translate-y-1/2 ${
                        position === 'left' ? '-translate-x-6' : 'translate-x-6'
                      } w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-lg`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}