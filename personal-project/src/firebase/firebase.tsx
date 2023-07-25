import firebase from 'firebase/app';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDSTbwIo4V5O3x4CzvRkhvdncu1UMgVqXg',
  authDomain: 'zorotravel-f3e91.firebaseapp.com',
  projectId: 'zorotravel-f3e91',
  storageBucket: 'zorotravel-f3e91.appspot.com',
  messagingSenderId: '872138480991',
  appId: '1:872138480991:web:19049055dfd00fb40e6aea',
  measurementId: 'G-2RP5VY7X26',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
