import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const features = [
  {
    title: 'Group Planning',
    description: 'Effortlessly create travel groups, invite friends, and collaborate on destinations in real-time. Set trip details, share ideas, and keep everyone on the same page with seamless updates.',
    link: '#group-planning',
  },
  {
    title: 'Event Creation',
    description: 'Plan unforgettable moments with ease. Schedule events with precise locations and times, invite group members, and track RSVPs instantly to ensure a smooth travel experience.',
    link: '#event-creation',
  },
  {
    title: 'Cost Splitting',
    description: 'Simplify group expenses with intelligent cost tracking. Log shared expenses, calculate fair splits, and get clear insights into who owes what, making group travel stress-free.',
    link: '#cost-splitting',
  },
];

const FeatureCard = ({ title, description, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
    className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[320px]"
  >
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
    <motion.a
      href={link}
      whileHover={{ x: 5 }}
      className="mt-6 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
    >
      Learn More <FaArrowRight className="ml-2" size={16} />
    </motion.a>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Why Choose Tripora?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;