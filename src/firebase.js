// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxB6jH_DqCBj82tr3ivxbHCgrAIgLRIzk",
  authDomain: "my-digital-diary-64a0e.firebaseapp.com",
  databaseURL: "https://my-digital-diary-64a0e-default-rtdb.firebaseio.com",
  projectId: "my-digital-diary-64a0e",
  storageBucket: "my-digital-diary-64a0e.appspot.com",
  messagingSenderId: "655142709391",
  appId: "1:655142709391:web:444ffc15f642406f8ba8fa",
  measurementId: "G-ZQ8WPZRW6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);