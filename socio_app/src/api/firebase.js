import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore"
 
// import "firebase/compat/db"
const firebaseConfig = {
  apiKey: "AIzaSyDWbWOAStD7SvtW6AXtav6qYgvHJIuV0Qk",
  authDomain: "socio-ef939.firebaseapp.com",
  projectId: "socio-ef939",
  storage: "socio-ef939.appspot.com",
  messagingSenderId: "976138668028",
  appId: "1:976138668028:web:158ac85571cd7ce12b9479",
  measurementId: "G-KP2Q0GVEV3",
 
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
