// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBz5Z_G5ozOcZ1AmhsFCQLYpWRBbkGtts",
  authDomain: "eco-adventure-experience-a5737.firebaseapp.com",
  projectId: "eco-adventure-experience-a5737",
  storageBucket: "eco-adventure-experience-a5737.firebasestorage.app",
  messagingSenderId: "137894434808",
  appId: "1:137894434808:web:20b027cfff3e87826aa80d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;