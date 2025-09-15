import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const menuVariants = {
    closed: { opacity: 0, y: '-100%' },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
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
        <div className="flex items-center md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
        <div className="hidden md:flex items-center space-x-12">
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
          <div className="flex items-center space-x-4">
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
            <motion.button
              href="#download"
              onClick={handleSignOut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md font-medium text-base hover:bg-gray-800 transition-colors duration-300">
              Sign Out
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-40 pt-20 pb-8 px-5 shadow-lg min-h-screen"
          >
            <nav className="flex flex-col space-y-6 text-center">
              <motion.a
                variants={linkVariants}
                transition={{ delay: 0.1 }}
                href="#features"
                onClick={(e) => handleScroll(e, '#features')}
                className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors duration-300"
              >
                Features
              </motion.a>
              <motion.a
                variants={linkVariants}
                transition={{ delay: 0.2 }}
                href="#faq"
                onClick={(e) => handleScroll(e, '#faq')}
                className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors duration-300"
              >
                FAQ
              </motion.a>
              <motion.a
                variants={linkVariants}
                transition={{ delay: 0.3 }}
                href="#pricing"
                onClick={(e) => handleScroll(e, '#pricing')}
                className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors duration-300"
              >
                Pricing
              </motion.a>
              <motion.a
                variants={linkVariants}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-gray-600 hover:text-gray-900 font-medium text-lg transition-colors duration-300"
              >
                Contact
              </motion.a>
              <motion.div variants={linkVariants} transition={{ delay: 0.5 }} className="flex justify-center space-x-6">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </motion.div>
              <motion.button
                variants={linkVariants}
                transition={{ delay: 0.6 }}
                onClick={handleSignOut}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 mt-4"
              >
                Sign Out
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;