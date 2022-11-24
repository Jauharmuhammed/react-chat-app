// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-8skbif-Ed_-gx7j7Rq4sv-ZlqVbCav0",
  authDomain: "react-chat-app-60355.firebaseapp.com",
  projectId: "react-chat-app-60355",
  storageBucket: "react-chat-app-60355.appspot.com",
  messagingSenderId: "625293136331",
  appId: "1:625293136331:web:ad1b47ea169a9f7c54a64e",
  measurementId: "G-EMD2GDE8NR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()