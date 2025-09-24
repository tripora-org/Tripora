import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is Tripora?',
    answer: 'Tripora is your ultimate travel companion, designed to make group travel planning effortless. Create groups, plan events, and split costs seamlessly with friends, all in one place. Together. Anywhere.',
  },
  {
    question: 'How does group planning work?',
    answer: 'With Tripora, you can create a group, invite friends, and collaborate on trip details in real-time. Set destinations, share ideas, and keep everyone updated with a shared itinerary.',
  },
  {
    question: 'Can I track and split expenses?',
    answer: 'Yes! Tripora lets you log shared expenses, calculate fair splits, and see who owes what. It simplifies group finances, so you can focus on enjoying your trip.',
  },
  {
    question: 'How do I create events in Tripora?',
    answer: 'Easily schedule events with specific locations and times. Invite group members, track RSVPs, and get notified of updates to keep your travel plans organized and stress-free.',
  },
  {
    question: 'Is Tripora available on mobile devices?',
    answer: 'Absolutely! Tripora is being built as a mobile-friendly app, available soon on iOS and Android, so you can plan and manage your trips on the go.',
  },
];

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-20 rounded-2xl border border-white/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <div className="flex items-center">
          <FaQuestionCircle className="text-teal-400 mr-4 text-xl" />
          <span className="text-white font-semibold text-lg group-hover:text-teal-300 transition-colors duration-300">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-teal-400"
        >
          <FaChevronDown size={18} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-4 pl-10 text-white/80 text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Tripora
          </p>
        </motion.div>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;