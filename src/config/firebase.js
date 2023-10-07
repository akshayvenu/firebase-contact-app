// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsHudG_BZYz8QuQBU545feK0U6p29EbXI",
  authDomain: "contact-app-200c7.firebaseapp.com",
  projectId: "contact-app-200c7",
  storageBucket: "contact-app-200c7.appspot.com",
  messagingSenderId: "367777043590",
  appId: "1:367777043590:web:59c8c56c45e7a2d2dfad07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
