import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFncp9RAEXXu0ryTnWA7ACfGbZFuN2RQ0",
  authDomain: "agency-website-12a38.firebaseapp.com",
  projectId: "agency-website-12a38",
  storageBucket: "agency-website-12a38.appspot.com",
  messagingSenderId: "953708651535",
  appId: "1:953708651535:web:47074f5305f2abe41def7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
