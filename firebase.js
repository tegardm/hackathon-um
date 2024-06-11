// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import{FIREBASE_API_KEY} from '@env';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: {FIREBASE_API_KEY},
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