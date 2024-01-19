import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNtRGm5OyPM-8Hi0GvOefN2RH81MbBZHg",
    authDomain: "hasho-todos.firebaseapp.com",
    projectId: "hasho-todos",
    storageBucket: "hasho-todos.appspot.com",
    messagingSenderId: "1015319381919",
    appId: "1:1015319381919:web:6e8678af97f93c97479faa",
    measurementId: "G-3MWST6JT8J"
  };
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
