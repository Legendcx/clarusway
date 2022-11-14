// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz14ZN-afS8JJZCTnbv90ChTr_2jgFUvY",
  authDomain: "fire-contact-legendcx.firebaseapp.com",
  databaseURL: "https://fire-contact-legendcx-default-rtdb.firebaseio.com",
  projectId: "fire-contact-legendcx",
  storageBucket: "fire-contact-legendcx.appspot.com",
  messagingSenderId: "1069509367015",
  appId: "1:1069509367015:web:fcbcd35f90f32bd8a37e42"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;