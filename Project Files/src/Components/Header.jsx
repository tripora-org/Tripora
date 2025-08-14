import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50 py-4"
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-gray-900 tracking-tight">Tripora</span>
          <span className="text-sm font-medium text-gray-500">Together. Anywhere.</span>
        </div>
        <div className="flex items-center space-x-12">
          <nav className="flex space-x-8">
            <a
              href="#features"
              onClick={(e) => handleScroll(e, '#features')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScroll(e, '#faq')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, '#pricing')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;