import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCw62XkHqc5WLXwioJi6vaxsHEGPHm4d9M",
  authDomain: "juan-carlos-portfolio-9f7d6.firebaseapp.com",
  projectId: "juan-carlos-portfolio-9f7d6",
  storageBucket: "juan-carlos-portfolio-9f7d6.appspot.com",
  messagingSenderId: "933694658525",
  appId: "1:933694658525:web:5210b0f84cbe5a5cea4834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Storage
const storage = getStorage(app);


// Inicializa Firestore Database
const db = getFirestore(app);


export { db, app, storage};