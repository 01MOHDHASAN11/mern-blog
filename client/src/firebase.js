// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-663bc.firebaseapp.com",
  projectId: "mern-blog-663bc",
  storageBucket: "mern-blog-663bc.appspot.com",
  messagingSenderId: "253755256332",
  appId: "1:253755256332:web:95804da67a3becdc854829"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);