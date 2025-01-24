// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "roomify-ai.firebaseapp.com",
  projectId: "roomify-ai",
  storageBucket: "roomify-ai.firebasestorage.app",
  messagingSenderId: "1054814564215",
  appId: "1:1054814564215:web:747a795dd4106665ff3b72",
  measurementId: "G-LDH3DBWVTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
