import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG2hYXSNoCjQMX0BziJGhDxuAAN83Qdo8",
  authDomain: "huddle-41168.firebaseapp.com",
  projectId: "huddle-41168",
  storageBucket: "huddle-41168.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "1:757722167996:ios:df539c7cb218ddd50daeb9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);