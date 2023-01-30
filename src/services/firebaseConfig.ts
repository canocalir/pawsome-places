import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_FIRE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIRE_DB_URL,
  projectId: import.meta.env.VITE_FIRE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIRE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIRE_APP_ID,
};

const app = initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);