import React from 'react';
import { motion } from 'framer-motion';
import appMockup from '../assets/app-mockup.png';

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
          <div className="flex space-x-4">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-md font-medium text-base hover:bg-gray-800 transition-colors duration-300"
            >
              Download Now
            </motion.a>
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-gray-900 px-6 py-2 font-medium text-base hover:text-gray-500 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        >
          <motion.div
            className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-blue-400/30 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
          <img
            src={appMockup}
            alt="Tripora App Mockup"
            className="max-w-full h-auto lg:max-w-md object-contain relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;