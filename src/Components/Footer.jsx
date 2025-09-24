import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-20 rounded-2xl border border-white/10 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <div className="flex flex-col mb-4">
                  <span 
                    className="text-3xl font-bold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #5ACADD, #4ECDC4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Tripora
                  </span>
                  <span className="text-sm font-medium text-white/70">Together. Anywhere.</span>
                </div>
                <p className="text-white/80 mb-6 max-w-md">
                  Making group travel planning effortless and enjoyable. Plan, collaborate, and explore the world with your friends.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {[
                    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 bg-white/10 backdrop-blur-20 border border-white/20 rounded-xl text-white/80 hover:text-teal-400 hover:bg-white/20 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Links Columns */}
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Download', 'Updates'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase()}`} 
                        className="text-white/70 hover:text-teal-400 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Support</h4>
                <ul className="space-y-2">
                  {['Help Center', 'Contact', 'Privacy', 'Terms'].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-')}`} 
                        className="text-white/70 hover:text-teal-400 transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-white/60 text-sm flex items-center">
                © 2025 Tripora. Made with <FaHeart className="text-red-400 mx-2" size={14} /> for travelers
              </p>
              <p className="text-white/60 text-sm mt-2 md:mt-0">
                All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
          