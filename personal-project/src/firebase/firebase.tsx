// import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';
import 'firebase/compat/storage';
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
export const user = auth.currentUser;
export default app;


/* 

console.log(user.photoURL);  // 프로필 사진 URL
console.log(user.phoneNumber);  // 휴대폰 번호
console.log(user.metadata);  // 사용자 메타데이터(createdAt, creationTime, lastLoginAt, lastSignInTime)
console.log(user.email);  // 이메일
console.log(user.displayName);  // 표시 이름
console.log(user.emailVerified);  // 이메일 인증 여부(boolean)
console.log(user.isAnonymous);  // 익명 여부(boolean)
*/