import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAzZ8qPq1Rp0OBY4Wx4sipEloYRopmZno4",
  authDomain: "evanplan.firebaseapp.com",
  databaseURL: "https://evanplan.firebaseio.com",
  projectId: "evanplan",
  storageBucket: "",
  messagingSenderId: "81438033572",
  appId: "1:81438033572:web:7b71ac8668bb9683"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});


export default firebase;
