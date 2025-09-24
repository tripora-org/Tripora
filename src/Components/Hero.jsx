import React from 'react';
import { motion } from 'framer-motion';
import appMockup from '../assets/app-mockup.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 text-left max-w-2xl space-y-8"
        >
          {/* Clean Glass Card */}
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Plan Your Adventures with Tripora
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-semibold text-white">Together. Anywhere.</span> 
              <br />Collaborate with friends, plan events, and manage costs effortlessly with our professional travel platform.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary CTA with Accent Color */}
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg"
              >
                Download Now
              </motion.a>
              
              {/* Secondary CTA - Subtle */}
              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-20 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/15 transition-all duration-300"
              >
                Learn More
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        >
          {/* Clean Glass Container for Mockup */}
          <div>
            <img
              src={appMockup}
              alt="Tripora App Mockup"
              className="max-w-full h-auto lg:max-w-md object-contain relative z-10 rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;