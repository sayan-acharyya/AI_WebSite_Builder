// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMMSh2cb1jYyWs1J2XGT4pkqbZBmHu5wU",
    authDomain: "genwebai-cec11.firebaseapp.com",
    projectId: "genwebai-cec11",
    storageBucket: "genwebai-cec11.firebasestorage.app",
    messagingSenderId: "914424554596",
    appId: "1:914424554596:web:eb4b1130fe9ddd5b3c2b71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider }