import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' },
    
  ];

  return (
    <nav className="sticky mt-6 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex w-[7rem] items-center">
            <img className='w-full' src={logo}/>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-amber-600 px-3 py-2 text-md font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <a href='register'> 

            <button className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer hover:bg-gray-100 hover:text-amber-600">
              Register
            </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block text-white h-5 w-5" />
              ) : (
                <Menu className="block text-white h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute w-full h-[45vh] md:hidden bg-brown-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50  ">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-amber-600 hover:bg-amber-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full text-black bg-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;