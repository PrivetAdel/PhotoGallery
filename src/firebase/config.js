import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCvU5Cr2cUhJVsMu_q902ugeXUHzx_R-4c",
  authDomain: "gallery-dbb59.firebaseapp.com",
  databaseURL: "https://gallery-dbb59.firebaseio.com",
  projectId: "gallery-dbb59",
  storageBucket: "gallery-dbb59.appspot.com",
  messagingSenderId: "401969093164",
  appId: "1:401969093164:web:f8a78e3117713881194f89"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};