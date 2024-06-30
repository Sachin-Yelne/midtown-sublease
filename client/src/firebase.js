// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-gt-sublease.firebaseapp.com",
  projectId: "mern-gt-sublease",
  storageBucket: "mern-gt-sublease.appspot.com",
  messagingSenderId: "679251885479",
  appId: "1:679251885479:web:025be491ee887c8cb0ca82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);