import React from 'react';
import { motion } from 'framer-motion';
import appMockup from '../assets/app-mockup.png';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br opacity-30"></div>
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6 max-w-2xl"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Plan Your Adventures with Tripora
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-semibold text-white">Together. Anywhere.</span><br />
            Collaborate with friends, plan events, and manage costs effortlessly with our professional travel platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-2xl shadow-lg transition-all"
            >
              Download Now
            </motion.a>
            
            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0"
        >
          <img
            src={appMockup}
            alt="Tripora App Mockup"
            className="max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;