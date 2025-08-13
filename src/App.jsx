import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Login from "./Components/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  if (user) {
    return (
      <div className="container">
        <h1>Tripora</h1>
        <p>Together. Anywhere.</p>
        <p>Willkommen, Admin!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Tripora</h1>
      <p>Together. Anywhere.</p>
      <Login onSuccess={() => {}} />
    </div>
  );
}

export default App;