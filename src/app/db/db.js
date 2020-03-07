import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUqEQiMn4yzvsFz7kRGjrDHpYMGQkmEjo",
  authDomain: "weebs-land.firebaseapp.com",
  databaseURL: "https://weebs-land.firebaseio.com",
  projectId: "weebs-land",
  storageBucket: "weebs-land.appspot.com",
  messagingSenderId: "606760628853",
  appId: "1:606760628853:web:641ce05293f7897b25be3c",
  measurementId: "G-E7F08KBGZV"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const users = db.collection("users");

export default firebase;
