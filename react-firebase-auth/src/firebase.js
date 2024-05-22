import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiQAPd13QpiuiybRc8Ud26miuLjLAv_-s",
  authDomain: "authentication-ce902.firebaseapp.com",
  projectId: "authentication-ce902",
  storageBucket: "authentication-ce902.appspot.com",
  messagingSenderId: "183197029227",
  appId: "1:183197029227:web:bfd358a36178bd6ea4722e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);