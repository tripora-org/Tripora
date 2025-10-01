import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const privacySections = [
  {
    title: 'Information We Collect',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        We collect information you provide directly when using Tripora, such as:
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Personal details (e.g., name, email address).</li>
          <li>Trip-related data (e.g., group details, event schedules, cost splits).</li>
          <li>Communication data (e.g., messages in private chat rooms).</li>
          <li>Technical data (e.g., IP address, browser type, device information).</li>
        </ul>
      </p>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        Your information helps us deliver and enhance Tripora’s services, including:
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Providing group planning and cost-splitting features.</li>
          <li>Personalizing your experience with tailored notifications.</li>
          <li>Responding to inquiries with dedicated support.</li>
          <li>Analyzing usage to improve platform performance.</li>
        </ul>
      </p>
    ),
  },
  {
    title: 'Data Sharing',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        We do not sell your personal information. We may share data with:
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Group members for collaborative trip planning.</li>
          <li>Trusted service providers (e.g., cloud hosting, analytics) compliant with privacy laws.</li>
          <li>Legal authorities when required by law or to protect our rights.</li>
        </ul>
      </p>
    ),
  },
  {
    title: 'Data Security',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        We prioritize your data’s safety with industry-standard measures like encryption and secure servers. While we strive for robust protection, we recommend using strong passwords and keeping your account details confidential.
      </p>
    ),
  },
  {
    title: 'Your Rights',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        Depending on your location, you may have the right to:
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Access, correct, or delete your personal data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request data portability.</li>
        </ul>
        Contact us below to exercise these rights.
      </p>
    ),
  },
  {
    title: 'Cookies and Tracking',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        We use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content. Manage your cookie preferences directly in your browser settings.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        We may update this Privacy Policy periodically. Changes will be posted here, and significant updates will be communicated via email or within the Tripora app.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <p className="text-gray-600 text-base leading-relaxed">
        Have questions about our data practices? Reach out to us at:{' '}
        <a href="mailto:privacy@tripora.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
          privacy@tripora.com
        </a>
      </p>
    ),
  },
];

const PrivacySection = ({ title, content, index }) => {
  const [isOpen, setIsOpen] = useState(true); // Expanded by default

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-gray-900 font-semibold text-xl hover:text-gray-700 transition-colors duration-200"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-gray-600" size={16} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-4"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Privacy = () => {
  return (
    <section id="privacy" className="py-20 bg-transparent relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100/50 animate-subtleSheen"></div>
      <style>{`
        @keyframes subtleSheen {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-subtleSheen {
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(229, 231, 235, 0.3), rgba(255, 255, 255, 0.95));
          background-size: 200% 200%;
          animation: subtleSheen 15s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Tripora Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Tripora, your privacy is our priority. Learn how we protect your data while you plan your adventures.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 p-8 shadow-sm"
        >
          {privacySections.map((section, index) => (
            <PrivacySection key={index} {...section} index={index} />
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="text-gray-600 text-base mt-8"
          >
            Last updated: August 14, 2025
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;