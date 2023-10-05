// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-oauth-fca59.firebaseapp.com",
  projectId: "mern-oauth-fca59",
  storageBucket: "mern-oauth-fca59.appspot.com",
  messagingSenderId: "821290469976",
  appId: "1:821290469976:web:805545f6970e6e6821d82d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);