// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp, getApp, getApps } from 'firebase/app';// TODO: Add SDKs for Firebase products that you want to use
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCIi-ypXc9HN-jjmrqR39C28i5yDzBAb9c",
  authDomain: "eventastand.firebaseapp.com",
  projectId: "eventastand",
  storageBucket: "eventastand.appspot.com",
  messagingSenderId: "966312682981",
  appId: "1:966312682981:web:caacc465df85f715757b0c"
};



const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
export{firebase, auth, db};