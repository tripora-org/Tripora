import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Faq from "./Components/Faq";
import Pricing from "./Components/Pricing";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {user ? (
          <div className="w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,197,253,0.05)_0%,rgba(192,132,252,0.05)_50%,transparent_100%)] animate-subtleGradient"></div>
            <style>{`
              @keyframes subtleGradient {
                0% { background: radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.05) 0%, rgba(192, 132, 252, 0.05) 50%, transparent 100%); }
                25% { background: radial-gradient(circle at 70% 30%, rgba(147, 197, 253, 0.03) 0%, rgba(192, 132, 252, 0.03) 50%, transparent 100%); }
                50% { background: radial-gradient(circle at 30% 70%, rgba(147, 197, 253, 0.05) 0%, rgba(192, 132, 252, 0.05) 50%, transparent 100%); }
                75% { background: radial-gradient(circle at 60% 40%, rgba(147, 197, 253, 0.04) 0%, rgba(192, 132, 252, 0.04) 50%, transparent 100%); }
                100% { background: radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.05) 0%, rgba(192, 132, 252, 0.05) 50%, transparent 100%); }
              }
              .animate-subtleGradient {
                animation: subtleGradient 20s ease-in-out infinite;
              }
            `}</style>
            <Header />
            <Hero />
            <Features />
            <Faq />
            <Pricing />
            <CTA />
          </div>
        ) : (
          <div className="w-full max-w-md text-center">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Tripora
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-gray-600">
                Together. Anywhere.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                The Tripora platform is being built and will be ready soon.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Access Tripora
              </h2>
              <Login onSuccess={() => {}} />
            </div>
          </div>
        )}
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500 relative z-10">
        <p>&copy; {new Date().getFullYear()} Tripora. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;