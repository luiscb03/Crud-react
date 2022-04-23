// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnEF2lFcCNR5uU_G3TkUwOE_xKXwvf-Sc",
  authDomain: "crud-pb.firebaseapp.com",
  projectId: "crud-pb",
  storageBucket: "crud-pb.appspot.com",
  messagingSenderId: "719019671224",
  appId: "1:719019671224:web:729b6d703f8fc5e68dbe4d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}