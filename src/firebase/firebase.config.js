// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-EpK7Wo3Zn5a9Pv9G2UcSrYhe7Ou4Wc",
  authDomain: "asset-management-system-8ea98.firebaseapp.com",
  projectId: "asset-management-system-8ea98",
  storageBucket: "asset-management-system-8ea98.appspot.com",
  messagingSenderId: "353960376965",
  appId: "1:353960376965:web:943abf208213815609c7ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; // Export 'app' and 'auth' instances
