import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASXmno90uyx0Yq0MwmrHk4kzP3mBR3w9A",
  authDomain: "crwn-db-abe18.firebaseapp.com",
  databaseURL: "https://crwn-db-abe18.firebaseio.com",
  projectId: "crwn-db-abe18",
  storageBucket: "crwn-db-abe18.appspot.com",
  messagingSenderId: "280698360298",
  appId: "1:280698360298:web:4c3b938036fd7881ebe293",
  measurementId: "G-S239BYW7NH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
