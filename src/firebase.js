
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD9YffvUwjpUQP-oaK2X4C8rrztNpW44s8",
  authDomain: "react-portfolio-keshav.firebaseapp.com",
  projectId: "react-portfolio-keshav",
  storageBucket: "react-portfolio-keshav.appspot.com",
  messagingSenderId: "138829463781",
  appId: "1:138829463781:web:6132bacc9e5c5eb64d540c"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()