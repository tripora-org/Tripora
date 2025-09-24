// CustomBackground.jsx - Ersatz für Silk mit modernen Glassmorphism-Effekten
import React from 'react';
import { motion } from 'framer-motion';

const CustomBackground = ({ 
  variant = 'gradient',
  intensity = 'medium'
}) => {
  
  // Professional Dark Gradient Background
  const GradientBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Subtle Animated Overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-gray-700/10 via-gray-600/5 to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-500/5 to-gray-800/10"
        animate={{
          opacity: [0.2, 0.1, 0.2],
          scale: [1.02, 1, 1.02],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  // Subtle Floating Elements Background
  const ParticlesBackground = () => {
    const particleCount = intensity === 'low' ? 4 : intensity === 'medium' ? 6 : 8;
    
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        
        {/* Very Subtle Floating Elements */}
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full filter blur-3xl bg-gray-600/5"
            style={{
              width: `${120 + (i % 3) * 60}px`,
              height: `${120 + (i % 3) * 60}px`,
              left: `${(i * 20) % 90}%`,
              top: `${(i * 25) % 80}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 20 + (i % 3) * 5,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Professional Grid Pattern Background
  const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated Grid Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 40%)
          `
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  // Render based on variant
  const renderBackground = () => {
    switch (variant) {
      case 'particles':
        return <ParticlesBackground />;
      case 'grid':
        return <GridBackground />;
      default:
        return <GradientBackground />;
    }
  };

  return (
    <div className="absolute inset-0">
      {renderBackground()}
      
      {/* Very Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default CustomBackground;


// ===================================================
// Updated App.jsx mit CustomBackground
// ===================================================

// In deiner App.jsx ersetze die Silk imports mit:

/*
import CustomBackground from "./Components/CustomBackground";

// Und verwende es so:

// Für Login Page:
<CustomBackground variant="particles" intensity="medium" />

// Für Main App:
<CustomBackground variant="gradient" intensity="low" />

// Für Hero Section:
<CustomBackground variant="mesh" intensity="high" />

// Für andere Sections:
<CustomBackground variant="waves" intensity="medium" />
*/