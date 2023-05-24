// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARwi0I2YRYAUy6WNaEVGC5tUZxKJcxJOY",
  authDomain: "minga-blanco-front.firebaseapp.com",
  projectId: "minga-blanco-front",
  storageBucket: "minga-blanco-front.appspot.com",
  messagingSenderId: "847835302141",
  appId: "1:847835302141:web:0da6e59df25ad70cd15694"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase