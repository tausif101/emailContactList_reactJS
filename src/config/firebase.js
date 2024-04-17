// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEt_xZ-jP3ZfrWcL2r3348fNgQnz8CHI",
  authDomain: "contact-using-react.firebaseapp.com",
  projectId: "contact-using-react",
  storageBucket: "contact-using-react.appspot.com",
  messagingSenderId: "1038709552590",
  appId: "1:1038709552590:web:5b30d7aec5c627d531a79f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);