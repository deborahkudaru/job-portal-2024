// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuTohpdNnLPpIZ31O0Iv0J4T4dfrlvGho",
  authDomain: "school-project-workbuddy.firebaseapp.com",
  projectId: "school-project-workbuddy",
  storageBucket: "school-project-workbuddy.appspot.com",
  messagingSenderId: "478056856694",
  appId: "1:478056856694:web:7a69801bc4cfd81f083357",
  measurementId: "G-EYH7NQ2C8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;
