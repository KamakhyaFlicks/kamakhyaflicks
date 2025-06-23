import React, { useState } from 'react';
import { Play, X } from 'lucide-react';


const projects = [
  {
    id: '1',
    title: 'Corporate Brand Story',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Commercial'
  },
  {
    id: '2',
    title: 'Wedding Cinematic Film',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Wedding'
  },
  {
    id: '3',
    title: 'Music Video Production',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Music'
  },
  {
    id: '4',
    title: 'Documentary Feature',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Documentary'
  },
  {
    id: '5',
    title: 'Theatre Performance',
    thumbnail: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&h=400&fit=crop',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Theatre'
  },
  {
    id: '6',
    title: 'Short Film Drama',
    thumbnail: 'https://5.imimg.com/data5/RI/IK/KS/SELLER-19243356/short-film.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Film'
  }
];

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our
            <span className="text-amber-600 ml-2">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of creative projects and visual storytelling
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group cursor-pointer   bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              onClick={() => handleCardClick(project)}
            >
              <div className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600/90 backdrop-blur-sm rounded-full">
                    <span className="text-white text-xs font-medium">{project.category}</span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg font-semibold group-hover:text-amber-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Golden accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Modal Dialog */}
      {isDialogOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl w-full h-[80vh] bg-black border border-border rounded-lg overflow-hidden">
            {/* Close Button */}
            <button 
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* YouTube Video */}
            {selectedProject && (
              <div className="w-full h-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedProject.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;