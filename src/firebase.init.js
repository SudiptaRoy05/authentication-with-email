// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-P-s6gHf6LJoyt82zc5csMHL06_o1EwI",
  authDomain: "email-password-auth-74f3e.firebaseapp.com",
  projectId: "email-password-auth-74f3e",
  storageBucket: "email-password-auth-74f3e.firebasestorage.app",
  messagingSenderId: "1025527311064",
  appId: "1:1025527311064:web:8afb7871b3f6f4d79f05ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;