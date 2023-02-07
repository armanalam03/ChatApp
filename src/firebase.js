import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwkoA9KQH8NMDetU_ku6ndDKSKOvt2s2Y",
  authDomain: "chatapp-ddd03.firebaseapp.com",
  projectId: "chatapp-ddd03",
  storageBucket: "chatapp-ddd03.appspot.com",
  messagingSenderId: "930701605843",
  appId: "1:930701605843:web:a3271ff7e3578860fc0d26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
