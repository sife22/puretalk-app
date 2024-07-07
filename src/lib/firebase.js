// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "puretalk-app.firebaseapp.com",
  projectId: "puretalk-app",
  storageBucket: "puretalk-app.appspot.com",
  messagingSenderId: "1012381763750",
  appId: "1:1012381763750:web:6c6ed36c5f7d9c4b61cc67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporter l'auth et la base de données
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();