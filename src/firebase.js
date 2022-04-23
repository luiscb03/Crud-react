// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD_NKfsaErhZd0WtsMFGiIoKil5f4XFbU",
  authDomain: "crud-bp-5ac47.firebaseapp.com",
  projectId: "crud-bp-5ac47",
  storageBucket: "crud-bp-5ac47.appspot.com",
  messagingSenderId: "133603208054",
  appId: "1:133603208054:web:9ccc0363464cce026ee857"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}