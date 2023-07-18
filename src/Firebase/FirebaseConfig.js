import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7yxLcR66vjejcm-8qtF9f4ZwozwsfFPs",
  authDomain: "ecommerce-6899c.firebaseapp.com",
  projectId: "ecommerce-6899c",
  storageBucket: "ecommerce-6899c.appspot.com",
  messagingSenderId: "478654489737",
  appId: "1:478654489737:web:9fc9110f4a75b3f7c9d258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)