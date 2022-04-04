import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_UrMEGrYcR93e38ErCylgBRtfjQSyozg",
  authDomain: "linkedin-clone-b64c9.firebaseapp.com",
  projectId: "linkedin-clone-b64c9",
  storageBucket: "linkedin-clone-b64c9.appspot.com",
  messagingSenderId: "119886717463",
  appId: "1:119886717463:web:497b294e24d8937361f252",
  measurementId: "G-1S38YGSEV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBE9-cCGc-qYK6-9VsSLv1KqBspExuzs3I",
//   authDomain: "enroll-app-demo.firebaseapp.com",
//   projectId: "enroll-app-demo",
//   storageBucket: "enroll-app-demo.appspot.com",
//   messagingSenderId: "976190768054",
//   appId: "1:976190768054:web:d9d7e2dacec5269c927717",
//   measurementId: "G-J7J3P7M4TM",
// });

// const db = firebaseApp.firestore();

// export default db;
