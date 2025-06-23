import React from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import logo from "../../assets/images/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-2">
                <img className='w-[8rem]' src={logo}/>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Crafting compelling visual stories that inspire, engage, and leave lasting impressions. 
                  Your vision, brought to life through our lens.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>South Extension II, G-25, New Delhi, Delhi 110049</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>+91 9319056757</span>
                  <span>+91 7827092409</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>kamakhyaflicks@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Media & Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-colors duration-200 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:border-amber-500 text-white placeholder-gray-500"
                  />
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-r-md transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} CineVision Productions. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;