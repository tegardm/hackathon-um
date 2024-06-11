// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaTYzF6vVifnD6ICdt_zeETQ-nRZTYEKs",
  authDomain: "eventa-stand.firebaseapp.com",
  projectId: "eventa-stand",
  storageBucket: "eventa-stand.appspot.com",
  messagingSenderId: "303627036215",
  appId: "1:303627036215:web:297f9c0b28cd6ab4c981b2",
  measurementId: "G-YXYXPGV3SS"
};



const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);
export{firebase, auth, db};