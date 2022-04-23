// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPvdPYRsJm0u2Ji714XlLozsEx6iT6hA",
  authDomain: "crud-bp.firebaseapp.com",
  projectId: "crud-bp",
  storageBucket: "crud-bp.appspot.com",
  messagingSenderId: "949972814369",
  appId: "1:949972814369:web:8ecfa1c66ba0f0393e3160"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}