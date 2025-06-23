import React from 'react';
import { Award, Users, Clock, Target, Play, Camera, Film, Star } from 'lucide-react';
import HeroAboutSection from '../components/projects/HeroAboutSection';
import aboutimage from "../assets/images/aboutimage.jpg";
const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/api/placeholder/300/400',
      bio: 'Award-winning director with 10+ years in cinematic storytelling.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Cinematographer',
      image: '/api/placeholder/300/400',
      bio: 'Master of visual composition with expertise in cutting-edge technology.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Producer',
      image: '/api/placeholder/300/400',
      bio: 'Strategic producer known for delivering exceptional projects on time.'
    },
    {
      name: 'David Kim',
      role: 'Post-Production Lead',
      image: '/api/placeholder/300/400',
      bio: 'Technical wizard specializing in advanced editing and visual effects.'
    }
  ];

  // Company stats
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Film },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Awards Won', icon: Award },
    { number: '8+', label: 'Years Experience', icon: Clock }
  ];

  // Services data
  const services = [
    {
      title: 'Corporate Videos',
      description: 'Professional corporate storytelling that elevates your brand',
      icon: Target
    },
    {
      title: 'Wedding Films',
      description: 'Cinematic wedding documentation capturing every precious moment',
      icon: Camera
    },
    {
      title: 'Commercial Production',
      description: 'High-impact commercials that drive engagement and conversions',
      icon: Play
    },
    {
      title: 'Documentary Films',
      description: 'Compelling documentaries that tell authentic stories',
      icon: Film
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "CineVision transformed our brand story into a masterpiece. Their attention to detail is unmatched.",
      author: "Jennifer Walsh",
      company: "Tech Innovations Inc."
    },
    {
      quote: "Professional, creative, and delivered beyond our expectations. Highly recommended!",
      author: "Robert Martinez",
      company: "Global Marketing Solutions"
    },
    {
      quote: "Our wedding film was absolutely perfect. They captured emotions we didn't even know existed.",
      author: "Lisa & James Thompson",
      company: "Happy Couple"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroAboutSection/>

      {/* 2. Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2016, CineVision began as a small creative studio with a big dream: 
                  to make professional video production accessible to businesses of all sizes.
                </p>
                <p>
                  Today, we're a full-service production company that has worked with Fortune 500 
                  companies, startups, and individuals, bringing their stories to life through 
                  innovative cinematography and cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutimage}
                alt="Our story"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create exceptional visual content that tells authentic stories, 
                drives meaningful connections, and delivers measurable results for our clients 
                through innovative filmmaking and strategic storytelling.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading creative partner for businesses and individuals seeking 
                to transform their ideas into powerful visual narratives that inspire, 
                educate, and create lasting impact in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive video production services tailored to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creative professionals passionate about bringing your vision to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Client Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life through compelling visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
              Get a Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-colors duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;