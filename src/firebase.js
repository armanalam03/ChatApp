import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBY5XpPeWPFbG2th4ntgFutuN73XK14rk",
  authDomain: "chatapp-673ab.firebaseapp.com",
  projectId: "chatapp-673ab",
  storageBucket: "chatapp-673ab.appspot.com",
  messagingSenderId: "13412435577",
  appId: "1:13412435577:web:29ae96f39ade46efd176a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
