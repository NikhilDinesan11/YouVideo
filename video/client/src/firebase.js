import {getAuth, GoogleAuthProvider}from "firebase/auth"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1TY_42mRZSe3gLUYnHGkRCVuP1qP8XwQ",
  authDomain: "video-6660c.firebaseapp.com",
  projectId: "video-6660c",
  storageBucket: "video-6660c.appspot.com",
  messagingSenderId: "115851360796",
  appId: "1:115851360796:web:255c279485ab80bae57dd9",
  measurementId: "G-BWZ4LJP9W7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()

export default app