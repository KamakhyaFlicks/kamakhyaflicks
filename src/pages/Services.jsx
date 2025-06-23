import React from 'react';
import { 
Sparkles, 
Play, 
Music, 
  Film, 
  Theater, 
  Video, 
  Mic, 
  Pen, 
  MessageSquare,  
  Clock,
  Award,
  ArrowRight
} from 'lucide-react';
import { 
  
} from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative -top-22 overflow-hidden pt-24 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Floating Objects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[15%] w-32 h-32 rounded-full bg-amber-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-[20%] w-40 h-40 rounded-full bg-amber-600/10 blur-2xl animate-pulse delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-gray-700/20 blur-xl animate-bounce"></div>
        <div className="+absolute bottom-1/4 left-[10%] w-16 h-16 rounded-full bg-amber-400/20 blur-lg animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          
          {/* Left Content */}
          <div className="space-y-8 animate-[fade-in_0.8s_ease-out]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-amber-500/30 blur-md"></div>
                <div className="relative bg-gray-900 p-3 rounded-full border border-amber-500/50">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                </div>
              </div>
              <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">
                Creative Excellence
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Our Creative-
              <span className="block text-amber-500 mt-2">Services</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              From captivating performances to cinematic productions, we bring your artistic vision to life with unmatched creativity and professional excellence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-500 mb-1">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-500 mb-1">8</div>
                <div className="text-sm text-gray-400">Core Services</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transform hover:-translate-y-1">
                Explore Services
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-amber-500/10">
                View Portfolio
              </button>
            </div>
          </div>
          
          {/* Right Image Collage */}
          <div className="relative animate-[fade-in_1s_ease-out_0.3s_both]">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              
              {/* Top Left - Dancing */}
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=240&fit=crop" 
                  alt="Dancing Performance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Music className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">DANCING</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Professional Choreography</h3>
                </div>
              </div>
              
              {/* Top Right - Film Production */}
              <div className="relative overflow-hidden rounded-2xl group mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=240&fit=crop" 
                  alt="Film Production"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Film className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">PRODUCTION</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Cinematic Excellence</h3>
                </div>
              </div>
              
              {/* Bottom Left - Acting */}
              <div className="relative overflow-hidden rounded-2xl group -mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=300&h=240&fit=crop" 
                  alt="Acting Classes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Play className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">ACTING</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Performance Training</h3>
                </div>
              </div>
              
              {/* Bottom Right - Music */}
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=240&fit=crop" 
                  alt="Music Production"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Music className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-amber-400 font-medium">MUSIC</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Audio Excellence</h3>
                </div>
              </div>
              
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-amber-500/30 rounded-full animate-spin"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-amber-500/10 to-transparent rounded-full blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};



const services = [
  {
    id: '1',
    title: 'Dancing',
    description: 'Professional dance choreography and performance training',
    fullDescription: 'Master the art of dance through professional choreography and performance training. Our comprehensive programs cover various dance styles including contemporary, ballet, hip-hop, and cultural dances to help you express yourself through movement.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop',
    duration: '8 weeks',
    level: 'All Levels',
    price: ''
  },
  {
    id: '2',
    title: 'Music',
    description: 'Music composition, recording, and production services',
    fullDescription: 'Create professional music with our comprehensive composition, recording, and production services. From songwriting to final mastering, we provide all the tools and expertise needed to bring your musical vision to life.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    duration: '12 weeks',
    level: 'Beginner',
    price: ''
  },
  {
    id: '3',
    title: 'Movie Production',
    description: 'End-to-end film production from concept to completion',
    fullDescription: 'Experience complete film production services from initial concept development to final post-production. Our team handles cinematography, directing, editing, and all technical aspects to create compelling visual stories.',
    icon: Film,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
    duration: '16 weeks',
    level: 'Intermediate',
    price: ''
  },
  {
    id: '4',
    title: 'Theatre Arts',
    description: 'Live performance and theatrical production services',
    fullDescription: 'Dive into the world of live theatre with comprehensive training in stage performance, character development, and theatrical production. Learn the fundamentals of acting, staging, and bringing stories to life on stage.',
    icon: Theater,
    image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop',
    duration: '10 weeks',
    level: 'All Levels',
    price: ''
  },
  {
    id: '5',
    title: 'Acting Classes',
    description: 'Professional acting training and performance coaching',
    fullDescription: 'Develop your acting skills through professional training and personalized coaching. Our program covers method acting, character analysis, improvisation, and on-camera techniques for both stage and screen performance.',
    icon: Theater,
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=400&h=300&fit=crop',
    duration: '14 weeks',
    level: 'All Levels',
    price: ''
  },
  {
    id: '6',
    title: 'Video Editing',
    description: 'Professional post-production and video editing services',
    fullDescription: 'Master the art of video editing with professional post-production techniques. Learn advanced editing software, color grading, sound design, and visual effects to create polished, professional video content.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
    duration: '8 weeks',
    level: 'Intermediate',
    price: ''
  },
  {
    id: '7',
    title: 'Communication',
    description: 'Media communication and public speaking training',
    fullDescription: 'Enhance your communication skills with specialized training in media presentation and public speaking. Build confidence, learn effective storytelling techniques, and master the art of engaging your audience.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop',
    duration: '6 weeks',
    level: 'All Levels',
    price: ''
  },
  {
    id: '8',
    title: 'Script Writing',
    description: 'Creative screenplay and script development services',
    fullDescription: 'Learn the craft of scriptwriting for film, television, and theatre. Develop compelling characters, engaging dialogue, and captivating storylines while mastering industry-standard formatting and storytelling techniques.',
    icon: Pen,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    duration: '10 weeks',
    level: 'Beginner',
    price: ''
  }
];


        




const ServicesGrid = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-amber-500 ml-3">Programs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your passion into art through our comprehensive dance programs designed for every skill level
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fade-in 0.8s ease-out both'
                }}
              >
                <div className="flex flex-col md:flex-row">
                  
                  {/* Image Section */}
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-80">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/60 md:to-gray-900" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-amber-500/30">
                        <IconComponent className="w-6 h-6 text-amber-400" />
                      </div>
                    </div>
                    
                    {/* Level Badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className="px-3 py-1 bg-amber-600/90 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {service.level}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                    
                    {/* Title and Short Description */}
                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-amber-500 font-medium text-lg mb-4">
                        {service.description}
                      </p>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.fullDescription}
                      </p>
                    </div>
                    
                    {/* Course Details */}
                    <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-300 text-sm">{service.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span className="text-gray-300 text-sm">Certificate Included</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-2xl font-bold text-amber-500">{service.price}</span>
                        <span className="text-gray-400 text-sm">per course</span>
                      </div>
                    </div>
                    
                    {/* Enrollment Button */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                      <button className="group/btn px-6 md:px-8 py-3 md:py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                        <span>Enroll Now</span>
                        <ArrowRight className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                      <button className="px-6 md:px-8 py-3 md:py-4 border border-gray-600 hover:border-amber-500 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-amber-500/10">
                        Learn More
                      </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Can't find the perfect program? We offer custom choreography and private lessons.</p>
          <button className="px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-medium rounded-xl transition-all duration-300">
            Contact Us for Custom Programs
          </button>
        </div>
      </div>
    </section>
  );
};




const Services = () => {
  return (
    <div className="min-h-screen  text-white">
      
      <ServicesHero />
      <ServicesGrid />
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's collaborate and create something extraordinary together
          </p>
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg shadow-amber-600/20">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;