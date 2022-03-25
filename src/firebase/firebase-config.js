import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB15aaYNDIJ_w3-kNn6sHXT9ksdzo8YxnA",
  authDomain: "learn-firebase-ae862.firebaseapp.com",
  projectId: "learn-firebase-ae862",
  storageBucket: "learn-firebase-ae862.appspot.com",
  messagingSenderId: "966417457273",
  appId: "1:966417457273:web:654fd18d2140fb1ef9b4a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Init services
const db = getFireStore();
