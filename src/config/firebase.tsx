import * as fb from "firebase";
import "firebase/storage";
console.log(process.env.REACT_APP_API_KEY);
const firebase = !fb.apps.length
  ? fb.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    appId: process.env.REACT_APP_APP_ID
  })
  : fb.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const firestorage = firebase.storage();
export const functions = firebase.functions();

if (process.env.NODE_ENV === "development") {
  functions.useFunctionsEmulator(`http://localhost:5000`);
}
