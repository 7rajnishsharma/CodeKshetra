// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiz8qFjbtKHi7D-6R4YgGi3sypnsIaCnw",
  authDomain: "epic-garb.firebaseapp.com",
  projectId: "epic-garb",
  storageBucket: "epic-garb.appspot.com",
  messagingSenderId: "417218333049",
  appId: "1:417218333049:web:2a329d2c1401c196ddc7a8",
  measurementId: "G-QCMP7GEL20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };