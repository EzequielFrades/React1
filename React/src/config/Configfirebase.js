import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhPc8Jghnq_HU-arnH6Wzcoa9Q9NwS9io",
  authDomain: "productos-3bf64.firebaseapp.com",
  projectId: "productos-3bf64",
  storageBucket: "productos-3bf64.appspot.com",
  messagingSenderId: "144916318418",
  appId: "1:144916318418:web:f5892b767c3387c15fc50b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, firebaseConfig }; 