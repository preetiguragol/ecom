import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCnRYz6Jfw8eA7Ftf1mQGoZofSzKrFbX4k",
    authDomain: "newecomauth.firebaseapp.com",
    projectId: "newecomauth",
    storageBucket: "newecomauth.appspot.com",
    messagingSenderId: "599148311448",
    appId: "1:599148311448:web:93dce314d48b8c9c0571ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;