// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBffDesOadHxfxipmw8z46R1F18n38ZkXo",
  authDomain: "journal-app-6d085.firebaseapp.com",
  projectId: "journal-app-6d085",
  storageBucket: "journal-app-6d085.appspot.com",
  messagingSenderId: "749017839798",
  appId: "1:749017839798:web:75ba2321c4342440fb0e17"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);