// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCATKfTENZDI-7hvsP5hT5M1rOcWAX1eXk",
  authDomain: "streaming-online-8d51d.firebaseapp.com",
  projectId: "streaming-online-8d51d",
  storageBucket: "streaming-online-8d51d.appspot.com",
  messagingSenderId: "14790765745",
  appId: "1:14790765745:web:9a54a9b51c41a0dd0e8690"
};

// Initialize Firebase

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

  export { db, auth, firebase, marcaTiempo};



