import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCayWhV6QFqbrgIe9fcub2XDJVqsDl_qlE",
  authDomain: "qwitter-8d32b.firebaseapp.com",
  projectId: "qwitter-8d32b",
  storageBucket: "qwitter-8d32b.appspot.com",
  messagingSenderId: "96577631704",
  appId: "1:96577631704:web:fa7d327e39711eacb96ead"
});

const db = firebaseApp.getFirestore();

export default db
