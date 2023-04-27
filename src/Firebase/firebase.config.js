// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3nzdGOR50pGLuYFjQwo6syWmativCj7A",
  authDomain: "news-dragon-a23d4.firebaseapp.com",
  projectId: "news-dragon-a23d4",
  storageBucket: "news-dragon-a23d4.appspot.com",
  messagingSenderId: "131152344085",
  appId: "1:131152344085:web:5b10638608a4772435ca1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;