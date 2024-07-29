// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP-aaMPoHA5x95fcmiutJkiOSLpNTYRio",
    authDomain: "multiform-b74b5.firebaseapp.com",
    projectId: "multiform-b74b5",
    storageBucket: "multiform-b74b5.appspot.com",
    messagingSenderId: "962726967652",
    appId: "1:962726967652:web:31336eedee8821c1fc2271"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);