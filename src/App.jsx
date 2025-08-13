import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Tripora
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-gray-600">
          Together. Anywhere.
        </p>
        <p className="mt-4 text-sm text-gray-500 text-center">
          The Tripora platform is being built and will be ready soon.
        </p>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        {user ? (
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Welcome, Admin!
            </p>
            <p className="mt-2 text-gray-600">
              The Tripora platform is being built and will be ready soon.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Access Tripora
              </h2>
              <Login onSuccess={() => {}} />
            </div>
          </div>
        )}
      </main>
      <footer className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tripora. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;