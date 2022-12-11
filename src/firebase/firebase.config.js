// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwcmRWmEHf6zQpa2hGZlWz4JLa8yfeaNE",
    authDomain: "my-portfolio-da1be.firebaseapp.com",
    projectId: "my-portfolio-da1be",
    storageBucket: "my-portfolio-da1be.appspot.com",
    messagingSenderId: "84781459275",
    appId: "1:84781459275:web:59df692270187ba0ee2ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;