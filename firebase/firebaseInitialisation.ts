// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmn9-BUNrwGGntbKsVruvPFP_Qe0ycfO0",
    authDomain: "zippers-b57eb.firebaseapp.com",
    databaseURL: "https://zippers-b57eb-default-rtdb.firebaseio.com",
    projectId: "zippers-b57eb",
    storageBucket: "zippers-b57eb.appspot.com",
    messagingSenderId: "563422035184",
    appId: "1:563422035184:web:5ed05564e68b7406c99635",
    measurementId: "G-0P3RJ6GBXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getCities(db) {
    const citiesCol = collection(db, 'users');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
