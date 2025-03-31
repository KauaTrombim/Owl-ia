// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyALLoWQnBTgVC0hQON2jkXw83T4q9kGv54",
  authDomain: "owl-ia.firebaseapp.com",
  projectId: "owl-ia",
  storageBucket: "owl-ia.firebasestorage.app",
  messagingSenderId: "477853252781",
  appId: "1:477853252781:web:313f4ffe0c226c0905da24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log("database config OK")