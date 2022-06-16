import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrTbTLdYjniZeZAfVBLfYoqM2S9dqDHgU",
  authDomain: "gamified-goals-3583e.firebaseapp.com",
  projectId: "gamified-goals-3583e",
  storageBucket: "gamified-goals-3583e.appspot.com",
  messagingSenderId: "517535690767",
  appId: "1:517535690767:web:178987e19653a19077737a",
};

export const connectAuth = () => {
  const app = initializeApp(firebaseConfig); //connect to firebase
  return getAuth(app); // connect to firebase/auth
};
