// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZHUhU4hQChqgjgC7u-Vd19L_PgWqUbk4",
  authDomain: "netflix-gpt-de01f.firebaseapp.com",
  projectId: "netflix-gpt-de01f",
  storageBucket: "netflix-gpt-de01f.appspot.com",
  messagingSenderId: "890784719975",
  appId: "1:890784719975:web:08f8a769e436c46f6260c2",
  measurementId: "G-JM2NH1BWNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();