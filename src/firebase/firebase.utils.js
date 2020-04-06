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
  measurementId: "G-S239BYW7NH",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
