// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers/';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBffDesOadHxfxipmw8z46R1F18n38ZkXo",
//   authDomain: "journal-app-6d085.firebaseapp.com",
//   projectId: "journal-app-6d085",
//   storageBucket: "journal-app-6d085.appspot.com",
//   messagingSenderId: "749017839798",
//   appId: "1:749017839798:web:75ba2321c4342440fb0e17"
// };

//Testing
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);