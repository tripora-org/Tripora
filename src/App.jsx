import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import CustomBackground from "./Components/CustomBackground";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-400/20 rounded-full filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gray-300/20 rounded-full filter blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 
            className="text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #FFFFF, #2A2A2A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Tripora
          </h1>
          <p className="text-white/80 text-xl mb-8">Together. Anywhere.</p>
        </motion.div>
        
        {/* Loading Animation */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gray-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  // Login Page Component
  const LoginPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      <CustomBackground variant="particles" intensity="medium" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${8 + i * 4} h-${8 + i * 4} bg-teal-400/10 rounded-full filter blur-xl`}
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Left Side - Branding & Info */}

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Access Tripora
                  </h2>
                  <p className="text-white/70">
                    Sign in to explore our platform
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Login onSuccess={() => {}} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Main App Component (for authenticated users)
  const MainApp = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen relative"
    >
      {/* Dynamic Background */}
      <CustomBackground variant="particles" intensity="medium" />

      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-teal-400/5 rounded-full filter blur-3xl"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20">
        <Header />
        <main className="pt-20">
          <Hero />
          <Features />
          <Faq />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </motion.div>
  );

  // Preview Modal Component
  const PreviewModal = () => (
    <AnimatePresence>
      {showPreview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowPreview(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-20 rounded-3xl border border-white/20 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h3 
                className="text-3xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #5ACADD, #4ECDC4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Coming Soon Features
              </h3>
              <p className="text-white/80">Here's what you can expect from Tripora</p>
            </div>

            <div className="grid gap-4 mb-8">
              {[
                { icon: "🌍", title: "Global Trip Planning", desc: "Plan trips anywhere in the world with smart recommendations" },
                { icon: "👥", title: "Group Collaboration", desc: "Invite friends and plan together in real-time" },
                { icon: "💰", title: "Smart Expense Tracking", desc: "Automatically split costs and track who owes what" },
                { icon: "📱", title: "Mobile App", desc: "Native iOS and Android apps for planning on the go" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-4 flex items-center"
                >
                  <div className="text-3xl mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{feature.title}</h4>
                    <p className="text-white/70 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => setShowPreview(false)}
              className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 text-white py-3 rounded-2xl font-semibold hover:from-teal-500 hover:to-cyan-500 transition-all duration-300"
            >
              Close Preview
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
        {!loading && !user && <LoginPage key="login" />}
        {!loading && user && <MainApp key="main" />}
      </AnimatePresence>
      
      <PreviewModal />
    </div>
  );
}

export default App;