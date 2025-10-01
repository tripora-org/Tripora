import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaCalculator, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    title: 'Group Planning',
    description:
      'Effortlessly create travel groups, invite friends, and collaborate on destinations in real-time. Set trip details, share ideas, and keep everyone on the same page with seamless updates.',
    icon: FaUsers,
    link: '#group-planning',
  },
  {
    title: 'Event Creation',
    description:
      'Plan unforgettable moments with ease. Schedule events with precise locations and times, invite group members, and track RSVPs instantly to ensure a smooth travel experience.',
    icon: FaCalendarAlt,
    link: '#event-creation',
  },
  {
    title: 'Cost Splitting',
    description:
      'Simplify group expenses with intelligent cost tracking. Log shared expenses, calculate fair splits, and get clear insights into who owes what, making group travel stress-free.',
    icon: FaCalculator,
    link: '#cost-splitting',
  },
];

const FeatureCard = ({ title, description, icon: Icon, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 200 } }}
    className="bg-white/5 backdrop-blur-xl rounded-4xl border border-white/10 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 group"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-teal-600 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110">
      <Icon className="text-white text-xl" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
    <motion.a
      href={link}
      className="mt-6 inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-200"
      whileHover={{ x: 5 }}
    >
      Learn More <FaArrowRight className="ml-2" size={14} />
    </motion.a>
  </motion.div>
);

const Features = () => (
  <section id="features" className="relative flex items-center justify-center min-h-screen overflow-hidden pt-20">
    <div className="absolute inset-0 bg-gradient-to-br opacity-30"></div>
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Choose Tripora?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the features that make group travel planning effortless and professional
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;