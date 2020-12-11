import firebase from "firebase/app";
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyARiA4r2XgbNs5ckN1gbilnznWCGB7jIgc",
    authDomain: "react-upload-12f31.firebaseapp.com",
    projectId: "react-upload-12f31",
    storageBucket: "react-upload-12f31.appspot.com",
    messagingSenderId: "422629979007",
    appId: "1:422629979007:web:2f43e98f670c378209204a",
    measurementId: "G-KZ4GSH2W23"
  };

  firebase.initializeApp(firebaseConfig );

  const storage = firebase.storage();

  export { storage, firebase as default}