import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      scrolled
        ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg'
        : 'bg-white/5 backdrop-blur-xl'
    }`}
  >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with Glass Effect */}
        <motion.div 
          className="flex flex-col"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-large text-white/70">Tripora</span>
          <span className="text-sm font-medium text-white/70">Together. Anywhere.</span>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 bg-white/10 backdrop-blur-20 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {['Features', 'FAQ', 'Pricing', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                className="text-white/80 hover:text-teal-300 font-medium transition-colors duration-300 relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <motion.a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-20 border border-white/20 rounded-xl text-white/80 hover:text-teal-300 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter size={18} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-20 border border-white/20 rounded-xl text-white/80 hover:text-teal-300 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram size={18} />
            </motion.a>

            {/* Sign Out Button */}
            <motion.button
              onClick={handleSignOut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold rounded-2xl hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg"
            >
              Sign Out
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:hidden fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-30 z-40 pt-20 pb-8 px-6 min-h-screen"
          >
            <div className="bg-white/5  backdrop-blur-2xl rounded-2xl border border-white/20 p-6">
              <nav className="flex flex-col space-y-6 text-center">
                {['Features', 'FAQ', 'Pricing', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                    className="text-white/90 hover:text-teal-300 font-medium text-lg transition-colors duration-300"
                  >
                    {item}
                  </motion.a>
                ))}
                
                <div className="flex justify-center space-x-4 pt-4">
                  <a href="https://x.com" className="p-2 bg-white/10 border border-white/20 rounded-xl text-white/80">
                    <FaTwitter size={20} />
                  </a>
                  <a href="https://instagram.com" className="p-2 bg-white/10 border border-white/20 rounded-xl text-white/80">
                    <FaInstagram size={20} />
                  </a>
                </div>
                
                <motion.button
                  onClick={handleSignOut}
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Sign Out
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;