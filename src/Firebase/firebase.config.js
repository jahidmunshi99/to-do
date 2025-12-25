// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7rBGceiND87L3PJh_C8OSYYvICjCvbf0",
  authDomain: "ph-pms.firebaseapp.com",
  projectId: "ph-pms",
  storageBucket: "ph-pms.firebasestorage.app",
  messagingSenderId: "931610848518",
  appId: "1:931610848518:web:e341b0b889fdb5acecc287",
  measurementId: "G-BMFFTBN4R1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
