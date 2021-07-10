
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnGGs0zZNJ_RRWLEcueUmRw-GuN5Gp6QI",
    authDomain: "vue-3app.firebaseapp.com",
    projectId: "vue-3app",
    storageBucket: "vue-3app.appspot.com",
    messagingSenderId: "465134494758",
    appId: "1:465134494758:web:ad6ddf30bf42418da2f2e7"
};
  


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;