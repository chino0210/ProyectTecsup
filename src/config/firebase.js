// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ,
  projectId: import.meta.env.VITE_PROJECT_ID ,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
  messagingSenderId: import.meta.env.VITE_SENDER_ID ,
  appId: import.meta.env.VITE_ID ,
  measurementId: import.meta.env.VITE_MEASUTEMENTID,
};

/*
VITE_API_KEY = AIzaSyDnVXxbc4ouVkl76c-3es2yY5pF5-Xdpi8
VITE_AUTH_DOMAIN = proyect-tecsup.firebaseapp.com
VITE_PROJECT_ID = proyect-tecsup
VITE_STORAGE_BUCKET = proyect-tecsup.appspot.com
VITE_SENDER_ID = 408873403625
VITE_ID = 1:408873403625:web:7e0d782b27beb6c26edc78
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializar autenticación
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };