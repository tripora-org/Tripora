import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

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
  },
  {
    name: 'Yearly',
    price: '€29',
    billing: 'per year',
    features: [
      'More than 5 users per group',
      'More than 5 events per group',
      'Unlimited cost split entries',
      'Private chat rooms',
      'Priority email support',
      'Custom trip templates',
    ],
    cta: 'Choose Yearly',
    link: '#signup',
    highlighted: true,
  },
  {
    name: 'Monthly',
    price: '€2,99',
    billing: 'per month',
    features: [
      'More than 5 users per group',
      'More than 5 events per group',
      'Unlimited cost split entries',
      'Private chat rooms',
      'Priority email support',
      'Custom trip templates',
    ],
    cta: 'Choose Monthly',
    link: '#signup',
    highlighted: false,
  },
];

const PricingCard = ({ name, price, billing, features, cta, link, highlighted, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
    className={`bg-white/90 backdrop-blur-sm rounded-xl border ${highlighted ? 'border-blue-300 shadow-lg' : 'border-gray-100 shadow-sm'} p-8 flex flex-col justify-between h-[480px] ${highlighted ? 'transform scale-105' : ''} transition-all duration-300`}
  >
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 text-sm ml-2">{billing}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600">
            <FaCheck className="text-blue-600 mr-2" size={16} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`block text-center px-6 py-3 rounded-full font-medium transition-colors duration-300 ${highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
    >
      {cta}
    </motion.a>
  </motion.div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Simple, Transparent Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;