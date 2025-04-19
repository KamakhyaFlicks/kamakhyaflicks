import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../../assets/images/KF.transparent.png';
const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {/* Logo & Description */}
        <div className='w-1/2'>
          <img src={Logo} alt="Kamakhya Flicks Logo" className="w-full" />
          <h1 className="text-2xl font-bold mb-2">Kamakhya Flicks</h1>
          <p className="text-sm text-gray-400">
            Crafting creative solutions through motion and media.
          </p>
        </div>

        {/* Links - Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Video Production</a></li>
            <li><a href="#">Photography</a></li>
            <li><a href="#">Event Coverage</a></li>
            <li><a href="#">Post Production</a></li>
          </ul>
        </div>

        {/* Links - Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaInstagram />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kamakhya Flicks. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
