// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb4C6EDBaLGlYGwUPSnd3sBZv4UsYAJ9g",
  authDomain: "crud-pb-53124.firebaseapp.com",
  projectId: "crud-pb-53124",
  storageBucket: "crud-pb-53124.appspot.com",
  messagingSenderId: "1041707967754",
  appId: "1:1041707967754:web:5692923e2439ea1dfec6f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}