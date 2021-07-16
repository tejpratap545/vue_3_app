
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAnGGs0zZNJ_RRWLEcueUmRw-GuN5Gp6QI",
  authDomain: "vue-3app.firebaseapp.com",
  databaseURL: "https://vue-3app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-3app",
  storageBucket: "vue-3app.appspot.com",
  messagingSenderId: "465134494758",
  appId: "1:465134494758:web:ad6ddf30bf42418da2f2e7"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.database();
export const chatrefs=db.ref("chats");
export default firebase;