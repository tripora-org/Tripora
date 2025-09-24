import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaCalculator, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    title: 'Group Planning',
    description: 'Effortlessly create travel groups, invite friends, and collaborate on destinations in real-time. Set trip details, share ideas, and keep everyone on the same page with seamless updates.',
    icon: FaUsers,
    link: '#group-planning',
  },
  {
    title: 'Event Creation',
    description: 'Plan unforgettable moments with ease. Schedule events with precise locations and times, invite group members, and track RSVPs instantly to ensure a smooth travel experience.',
    icon: FaCalendarAlt,
    link: '#event-creation',
  },
  {
    title: 'Cost Splitting',
    description: 'Simplify group expenses with intelligent cost tracking. Log shared expenses, calculate fair splits, and get clear insights into who owes what, making group travel stress-free.',
    icon: FaCalculator,
    link: '#cost-splitting',
  },
];

const FeatureCard = ({ title, description, icon: Icon, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    whileHover={{ y: -5, scale: 1.01, transition: { type: 'spring', stiffness: 300 } }}
    className="bg-white/5 backdrop-blur-20 rounded-xl border border-white/10 p-8 shadow-lg hover:shadow-xl hover:bg-white/8 transition-all duration-300 flex flex-col justify-between h-[350px] group"
  >
    {/* Clean Icon */}
    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
      <Icon className="text-white text-xl" />
    </div>
    
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
    
    <motion.a
      href={link}
      whileHover={{ x: 3 }}
      className="mt-6 flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200"
    >
      Learn More 
      <FaArrowRight className="ml-2" size={14} />
    </motion.a>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Tripora?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the features that make group travel planning effortless and professional
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;