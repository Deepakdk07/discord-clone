// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA7NmXGyjCubeDSCQE8totklZZINmnGYtE",
    authDomain: "discord-ba4e7.firebaseapp.com",
    databaseURL: "https://discord-ba4e7.firebaseio.com",
    projectId: "discord-ba4e7",
    storageBucket: "discord-ba4e7.appspot.com",
    messagingSenderId: "654740910076",
    appId: "1:654740910076:web:50b0bb06abfcc562ef8c79",
    measurementId: "G-9BMJ0GRW3P"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
