import React from 'react';
import { 
  Music, 
  Film, 
  Theater, 
  Video, 
  Mic, 
  Pen, 
  MessageSquare 
} from 'lucide-react';

// Custom Card Components
const Card = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`bg-white shadow-sm border border-gray-200 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};



const services = [
  {
    id: '1',
    title: 'Dancing',
    description: 'Professional dance choreography and performance training',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Music',
    description: 'Music composition, recording, and production services',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Movie Production',
    description: 'End-to-end film production from concept to completion',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Theatre Arts',
    description: 'Live performance and theatrical production services',
    icon: Theater,
    image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Acting Classes',
    description: 'Professional acting training and performance coaching',
    icon: Theater,
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'Video Editing',
    description: 'Professional post-production and video editing services',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
  },
  {
    id: '7',
    title: 'Communication',
    description: 'Media communication and public speaking training',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop'
  },
  {
    id: '8',
    title: 'Script Writing',
    description: 'Creative screenplay and script development services',
    icon: Pen,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop'
  }
];

const ServicesGrid = () => {
  return (
    <div className="min-h-screen">
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Our
              <span className="text-amber-600 ml-2">Services</span>
            </h2>
            <p className="text-lg text-amber-700/80 max-w-2xl mx-auto font-medium">
              Comprehensive creative services tailored to bring your artistic vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-64 relative bg-gradient-to-br from-white via-amber-50/50 to-yellow-50/30 border border-amber-200/30 hover:border-amber-300/50 transform hover:-translate-y-2"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />
                  
                  {/* Content */}
                  <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                    {/* Icon - Always visible */}
                    <div className="mb-4 flex justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>

                    {/* Title - Always visible */}
                    <h3 className="text-lg font-semibold mb-2 text-center group-hover:text-amber-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description - Only visible on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm leading-relaxed text-center text-gray-200">
                        {service.description}
                      </p>
                      
                      {/* Golden accent line */}
                      <div className="mt-4 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-lg" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;