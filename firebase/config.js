// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Gs0hXKmijwaMEnFvYPlTcJG6C9feS8o",
  authDomain: "zippers-firebase-13f16.firebaseapp.com",
  databaseURL: "https://zippers-firebase-13f16-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zippers-firebase-13f16",
  storageBucket: "zippers-firebase-13f16.appspot.com",
  messagingSenderId: "1016490133796",
  appId: "1:1016490133796:web:ebceed0ad62c791ff04bb1",
  measurementId: "G-L3ZFLDB20J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {app, db}

