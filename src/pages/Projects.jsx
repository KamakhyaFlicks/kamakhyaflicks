import React, { useState } from 'react';
import { Play, X, Calendar, Users } from 'lucide-react';
import ProjectsHero from '../components/projects/ProjectsHero';

const projects = [
  {
    id: '1',
    title: 'Queen Of Delhi - 2024',
    thumbnail: 'https://img.youtube.com/vi/njkVVljpgMM/maxresdefault.jpg',
    youtubeId: 'njkVVljpgMM',
    category: 'Queen of Delhi Modelling Show',
    description: 'A soulful journey through love and loss, captured in stunning visuals',
    status: 'completed',
    year: '2024'
  },
  {
    id: '2',
    title: 'Music Production',
    thumbnail: 'https://img.youtube.com/vi/mOl2YsbABVQ/maxresdefault.jpg',
    youtubeId: 'mOl2YsbABVQ',
    category: 'Music Video',
    description: 'Urban storytelling with dynamic cinematography and compelling narrative',
    status: 'completed',
    year: '2024'
  },
  {
    id: '3',
    title: 'Echoes of Tomorrow',
    thumbnail: 'https://img.youtube.com/vi/C5WP6X9nEGY/maxresdefault.jpg',
    youtubeId: 'C5WP6X9nEGY',
    category: 'Music Video',
    description: 'Futuristic visuals meet classical music in this innovative production',
    status: 'completed',
    year: '2023'
  },
  {
    id: '4',
    title: 'Digital Dreams',
    thumbnail: 'https://img.youtube.com/vi/lIOkyYxKQDQ/maxresdefault.jpg',
    youtubeId: 'lIOkyYxKQDQ',
    category: 'Web Series',
    description: 'A thrilling web series exploring the intersection of technology and humanity',
    status: 'completed',
    year: '2024'
  },
  {
    id: '5',
    title: 'Queen of Delhi',
    thumbnail: 'https://img.youtube.com/vi/wb_ah5YBjIw/maxresdefault.jpg',
    youtubeId: 'wb_ah5YBjIw',
    category: 'Modelling Show',
    description: 'Celebrating beauty, talent, and empowerment in the heart of Delhi',
    status: 'completed',
    year: '2024'
  },
  {
    id: '6',
    title: 'Bhaksan - crime thriller',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
    youtubeId: '',
    category: 'Webseries',
    description: 'An atmospheric music video featuring ethereal landscapes and emotional depth',
    status: 'upcoming',
    year: '2025'
  }
];

// Fixed ProjectCard as a proper React component
const ProjectCard = ({ project, onClick }) => (
  <div 
    className={`group rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
      project.status === 'completed' ? 'cursor-pointer' : 'cursor-default'
    }`}
    onClick={() => onClick(project)}
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        project.status === 'completed' 
          ? 'bg-black/20 group-hover:bg-black/60' 
          : 'bg-black/40'
      }`} />
      
      {/* Play Button - Only for completed projects */}
      {project.status === 'completed' && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm ${
        project.status === 'completed' 
          ? 'bg-green-600/90' 
          : 'bg-amber-600/90'
      }`}>
        <span className="text-white text-xs font-medium flex items-center gap-1">
          {project.status === 'completed' ? (
            <>
              <div className="w-2 h-2 bg-white rounded-full" />
              Completed
            </>
          ) : (
            <>
              <Calendar className="w-3 h-3" />
              Coming Soon
            </>
          )}
        </span>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
        <span className="text-white text-xs font-medium">{project.category}</span>
      </div>

      {/* Year Badge */}
      {project.year && (
        <div className="absolute bottom-4 right-4 px-2 py-1 bg-white/90 backdrop-blur-sm rounded">
          <span className="text-black text-xs font-medium">{project.year}</span>
        </div>
      )}
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-amber-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const completedProjects = projects.filter(p => p.status === 'completed');
  const upcomingProjects = projects.filter(p => p.status === 'upcoming');

  const handleCardClick = (project) => {
    if (project.status === 'completed') {
      setSelectedProject(project);
      setIsDialogOpen(true);
    }
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

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isDialogOpen) {
        handleCloseDialog();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDialogOpen]);

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Work
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{completedProjects.length} Projects Completed</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        {upcomingProjects.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Upcoming Projects
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Coming Soon</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {isDialogOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-black border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm border border-gray-600"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Project Info */}
            <div className="absolute top-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-md border border-gray-700">
              <h3 className="text-white font-semibold text-lg mb-1">{selectedProject.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{selectedProject.category} • {selectedProject.year}</p>
              <p className="text-gray-400 text-xs">{selectedProject.description}</p>
            </div>

            {/* YouTube Video */}
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1&fs=1&iv_load_policy=3`}
                title={selectedProject.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProjectsHero/>
      
      {/* Page Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our
            <span className="text-amber-600 ml-2">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our creative journey through music videos, web series, and live productions that bring stories to life
          </p>
        </div>
      </section>

      <ProjectsGrid />
      
      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate on your next project and bring your vision to life
          </p>
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;