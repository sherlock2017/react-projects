import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE9-cCGc-qYK6-9VsSLv1KqBspExuzs3I",
  authDomain: "enroll-app-demo.firebaseapp.com",
  projectId: "enroll-app-demo",
  storageBucket: "enroll-app-demo.appspot.com",
  messagingSenderId: "976190768054",
  appId: "1:976190768054:web:d9d7e2dacec5269c927717",
  measurementId: "G-J7J3P7M4TM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
