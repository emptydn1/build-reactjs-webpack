var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCsqO283VS7r9IR_gW8ICIjnBLslk6MrLU",
  authDomain: "build-architecture-reactjs.firebaseapp.com",
  databaseURL: "https://build-architecture-reactjs.firebaseio.com",
  projectId: "build-architecture-reactjs",
  storageBucket: "build-architecture-reactjs.appspot.com",
  messagingSenderId: "960124957362",
  appId: "1:960124957362:web:2f2d90100a556ae3aacfab",
  measurementId: "G-MH00QDKGXY"
};

export const createUser = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
