import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW1RU70Z-XoTnNiuKECpdbls7wAHZJNBE",
  authDomain: "react-firebase-18c53.firebaseapp.com",
  projectId: "react-firebase-18c53",
  storageBucket: "react-firebase-18c53.appspot.com",
  messagingSenderId: "264760391607",
  appId: "1:264760391607:web:5c2351426be664571fda32",
  measurementId: "G-TLL9T7KX7L",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const logOut = () => {
  signOut(auth);
};

export { auth, logOut };
