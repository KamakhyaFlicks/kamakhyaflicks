import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

export default function MapShowcase() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Kammakhya Flicks, New Delhi",
      subtext: "Easily accessible location"
    },
    {
      icon: Phone,
      title: "Contact",
      content: "+91 (11) 2345-6789",
      subtext: "Available 24/7"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      subtext: "Sunday: By appointment"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kammakhyaflicks.com",
      subtext: "Quick response guaranteed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-purple-400 mb-4">
            <Navigation className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">Find Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Studio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Located in the heart of New Delhi, our studio is easily accessible and equipped with state-of-the-art facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="relative group">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                {!isMapLoaded && (
                  <div className="absolute inset-0 bg-gray-700/50 animate-pulse rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Navigation className="w-12 h-12 text-gray-400 mx-auto mb-2 animate-spin" />
                      <p className="text-gray-400">Loading map...</p>
                    </div>
                  </div>
                )}
                
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2021244403704!2d77.21494724368995!3d28.563692624766226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ade67933588dda9%3A0xe46bb16d5c48903!2sKammakhya%20Flicks!5e0!3m2!1sen!2sin!4v1750491626341!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full rounded-xl border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setIsMapLoaded(true)}
                    title="Kammakhya Flicks Location"
                  />
                </div>
              </div>
              
              {/* Map Overlay Controls */}
              <div className="flex justify-between items-center mt-6">
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Open in Google Maps</span>
                </button>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Live location</span>
                </div>
              </div>
            </div>

            {/* Floating Map Indicator */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-purple-400 animate-bounce" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/30">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div 
                      key={index}
                      className="group p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-400 mb-1">{item.title}</h4>
                          <p className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                            {item.content}
                          </p>
                          <p className="text-xs text-gray-500">{item.subtext}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
                  <Navigation className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
                <button className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-gray-600 hover:border-gray-500 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-700/30">
                <div className="text-2xl font-bold text-white mb-1">5 min</div>
                <div className="text-xs text-gray-400">From Metro</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-700/30">
                <div className="text-2xl font-bold text-white mb-1">Free</div>
                <div className="text-xs text-gray-400">Parking</div>
              </div>
              <div className="text-center p-4 bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-700/30">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-gray-400">Security</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Ready to visit us?</p>
          <button className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group">
            <span>Schedule a consultation</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
} 
