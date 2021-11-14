// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyANQ6Z6BkTcQ5bBp2QlOVioHQPW3RDDgEY",

  authDomain: "proyectou2dmi.firebaseapp.com",

  projectId: "proyectou2dmi",

  storageBucket: "proyectou2dmi.appspot.com",

  messagingSenderId: "779551243931",

  appId: "1:779551243931:web:7508311d2fc604538e503e"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage().ref();
const database = firebase.database();

export {auth, database, firebase, storage};