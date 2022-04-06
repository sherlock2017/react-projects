// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN17pFN3sAU1YPg6e1cc1j_Pachka3U7c",
    authDomain: "clone-3a1ce.firebaseapp.com",
    projectId: "clone-3a1ce",
    storageBucket: "clone-3a1ce.appspot.com",
    messagingSenderId: "622014222840",
    appId: "1:622014222840:web:8527759b7142153a87460d",
    measurementId: "G-9ZN4RGZ7YD"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
