import React from 'react';
import { motion } from 'framer-motion';
import appMockup from'../assets/app-mockup.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-white relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/50"></div>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:w-1/2 text-left max-w-lg space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Plan Your Adventures with Tripora
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Together. Anywhere. Collaborate with friends, plan events, and manage costs effortlessly.
          </p>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Download Now
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <img
            src={appMockup}
            alt="Tripora App Mockup"
            className="max-w-full h-auto lg:max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;