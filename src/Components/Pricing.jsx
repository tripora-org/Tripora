import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';

const plans = [
  {
    name: 'Free',
    price: '€0',
    billing: 'forever',
    features: [
      'Up to 5 users per group',
      'Up to 5 events per group', 
      'Basic cost splitting',
      'Community support',
    ],
    cta: 'Get Started',
    link: '#signup',
    highlighted: false,
    popular: false,
  },
  {
    name: 'Yearly',
    price: '€24,99',
    billing: 'per year',
    features: [
      'Unlimited users per group',
      'Unlimited events per group',
      'Advanced cost splitting',
      'Private chat rooms',
      'Priority email support', 
      'Custom trip templates',
      'Offline access',
      'Export data',
    ],
    cta: 'Choose Yearly',
    link: '#signup',
    highlighted: true,
    popular: true,
  },
  {
    name: 'Monthly', 
    price: '€2,99',
    billing: 'per month',
    features: [
      'Unlimited users per group',
      'Unlimited events per group',
      'Advanced cost splitting',
      'Private chat rooms',
      'Priority email support',
      'Custom trip templates',
    ],
    cta: 'Choose Monthly',
    link: '#signup', 
    highlighted: false,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your group travel needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            All plans include secure data encryption and professional support
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const PricingCard = ({ name, price, billing, features, cta, link, highlighted, popular, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    whileHover={{ y: -5, scale: highlighted ? 1.01 : 1.02 }}
    className={`bg-white/5 backdrop-blur-20 rounded-4xl border ${
      highlighted 
        ? 'border-teal-600/30 shadow-xl shadow-teal-600/10 scale-105' 
        : 'border-white/10 shadow-lg'
    } p-8 flex flex-col justify-between h-[480px] relative transition-all duration-300 group`}
  >
    {/* Popular Badge */}
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-teal-600 text-white px-4 py-1 rounded-full flex items-center font-semibold text-sm shadow-lg">
          Most Popular
        </div>
      </div>
    )}

    <div>
      <h3 className={`text-2xl font-bold mb-4 ${highlighted ? 'text-white' : 'text-white'}`}>
        {name}
      </h3>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-400 text-sm ml-2">/ {billing}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-center text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
          >
            <div className="w-4 h-4 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <FaCheck className="text-white" size={10} />
            </div>
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
    
    <motion.a
      href={link}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`block text-center px-6 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 ${
        highlighted
          ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg'
          : 'bg-white/10 backdrop-blur-20 border border-white/20 text-white hover:bg-white/15'
      }`}
    >
      {cta}
    </motion.a>
  </motion.div>
);

export default Pricing;