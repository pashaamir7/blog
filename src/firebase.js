// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkIzhS8jjhlQUlEYZesHWgcHb6v81-btI",
  authDomain: "react-hooks-blog-8506a.firebaseapp.com",
  projectId: "react-hooks-blog-8506a",
  storageBucket: "react-hooks-blog-8506a.appspot.com",
  messagingSenderId: "884009878435",
  appId: "1:884009878435:web:14595354c9ae5ba5e5d016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();