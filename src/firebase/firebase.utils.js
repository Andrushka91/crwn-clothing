import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOc5ga_5Wn6XRvxAhGI8Dy3tA-_VG2dVk",
  authDomain: "crwn-db-11a0d.firebaseapp.com",
  databaseURL: "https://crwn-db-11a0d.firebaseio.com",
  projectId: "crwn-db-11a0d",
  storageBucket: "crwn-db-11a0d.appspot.com",
  messagingSenderId: "596600165904",
  appId: "1:596600165904:web:8b5369e994778ef8961c95",
  measurementId: "G-SJN9KYFZ2B",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

return userRef;

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
