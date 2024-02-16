// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC3llito_HnO-pVznqGdqQbWB2ihREPY3o",
  authDomain: "logintask-8b1cf.firebaseapp.com",
  projectId: "logintask-8b1cf",
  storageBucket: "logintask-8b1cf.appspot.com",
  messagingSenderId: "369486232332",
  appId: "1:369486232332:web:2d8af05bc941b156cd2729",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
