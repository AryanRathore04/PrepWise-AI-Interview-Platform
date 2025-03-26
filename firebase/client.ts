import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcuN5Q3rrQtoXbZw1Cw5C3yRP3M13Q6mY",
  authDomain: "prepwise-fcfda.firebaseapp.com",
  projectId: "prepwise-fcfda",
  storageBucket: "prepwise-fcfda.firebasestorage.app",
  messagingSenderId: "25343683225",
  appId: "1:25343683225:web:2035728a0dab5b1f64e608",
  measurementId: "G-CCBZXN090X"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);