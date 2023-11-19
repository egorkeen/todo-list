// firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPtLBRcK29Q65Ipr2dFjZX6YGPnI-ile8",
  authDomain: "todo-list-api-5f378.firebaseapp.com",
  projectId: "todo-list-api-5f378",
  storageBucket: "todo-list-api-5f378.appspot.com",
  messagingSenderId: "731720089505",
  appId: "1:731720089505:web:7b228e3c7b3e4984fcd5e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, googleProvider);
};

export const updateUserProfile = async () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
    } else {
    }
  });
};