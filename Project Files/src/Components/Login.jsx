import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onSuccess();
    } catch {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-label="Email address"
        className="w-full px-5 py-3 bg-gray-100 text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-base transition-all duration-200"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        aria-label="Password"
        className="w-full px-5 py-3 bg-gray-100 text-gray-900 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-base transition-all duration-200"
      />
      <button
        onClick={handleLogin}
        className="w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 text-base transition-all duration-200"
      >
        Sign In
      </button>
      {error && (
        <p className="text-red-500 text-sm text-center" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}