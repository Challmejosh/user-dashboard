// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain: import.meta.env.VITE_AUTHD,
  projectId: import.meta.env.VITE_PROJ_ID,
  storageBucket: import.meta.env.VITE_MSGB,
  messagingSenderId: import.meta.env.VITE_MSGSID,
  appId: import.meta.env.VITE_AID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider
export const faceBookProvider = new FacebookAuthProvider