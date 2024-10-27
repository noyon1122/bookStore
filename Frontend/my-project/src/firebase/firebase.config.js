// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsUNZgVB74wuTeE8xBpcLnXyxrpPHIRlk",
  authDomain: "bookstore-fd0b1.firebaseapp.com",
  projectId: "bookstore-fd0b1",
  storageBucket: "bookstore-fd0b1.appspot.com",
  messagingSenderId: "1097261864704",
  appId: "1:1097261864704:web:c5b3337c3fa82a464a85e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;