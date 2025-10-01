import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AnimatePresence, motion } from "framer-motion";

import Login from "./Components/Login";

// Tailwind UI Block Components
import Header from "./Components/Header";   // Hero-Style Navigation
import Hero from "./Components/Hero";       // Tailwind Hero Block
import Features from "./Components/Features"; // Tailwind Features Block
import Pricing from "./Components/Pricing";   // Tailwind Pricing Block
import Faq from "./Components/Faq";           // Tailwind FAQ Block
import CTA from "./Components/CTA";           // Tailwind CTA Block
import Footer from "./Components/Footer";     // Tailwind Footer Block

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // 🔹 Loading Screen
  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-white"
      >
        Tripora
      </motion.h1>
    </motion.div>
  );

  // 🔹 Login Page
  const LoginPage = () => (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Welcome to Tripora
        </h2>
        <Login onSuccess={() => {}} />
      </motion.div>
    </div>
  );

  // 🔹 Main Page
  const MainApp = () => (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br 
                from-gray-900 via-gray-800 to-gray-900 
                bg-[length:300%_300%] animate-gradient opacity-70"></div>
        <Header />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Faq />
          <CTA />
        </main>
        <Footer />
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
        {!loading && !user && <LoginPage key="login" />}
        {!loading && user && <MainApp key="main" />}
      </AnimatePresence>
    </div>
  );
}

export default App;