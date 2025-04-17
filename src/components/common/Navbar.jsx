import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {navLinks} from '../../constants/navLinks';
import Logo from '../../assets/images/KF.transparent.png'; // Adjust the import based on your logo path
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative top-0  h-[7rem] w-full z-50 transition-all duration-300 bg-[#121212]">
      <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-[2rem] pb-[2rem]">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-30 h-30">
            <span className="text-white font-bold text-xl">
                <img src={Logo} alt="Logo" className=" inline-block mr-2" />
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 "
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full top-25 absolute`}>
        <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#121212] shadow-lg ">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-yellow-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium border-l-4 border-transparent hover:border-indigo-500 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          
        </div>
      </div>
    </nav>
  );
}