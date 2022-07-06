import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqgKJsYrqkKEv3gGsmCRPLjpslnMt779I",
    authDomain: "fir-project-e5deb.firebaseapp.com",
    projectId: "fir-project-e5deb",
    storageBucket: "fir-project-e5deb.appspot.com",
    messagingSenderId: "887764384312",
    appId: "1:887764384312:web:5474058d5ef9e91ac5c4cd",
    measurementId: "G-JSYYZJBM4Z" 
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();

  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};