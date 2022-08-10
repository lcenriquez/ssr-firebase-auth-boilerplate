import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBJ_5vLCY43U6x5sLj96lktYa4LL6_MM",
  authDomain: "boilerplate-8f2c3.firebaseapp.com",
  projectId: "boilerplate-8f2c3",
  storageBucket: "boilerplate-8f2c3.appspot.com",
  messagingSenderId: "389157921953",
  appId: "1:389157921953:web:98435445463d90e61fbce0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);