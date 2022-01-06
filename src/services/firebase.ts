import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDPsStiG6il_Yg-cCuON0h8IbnH8hEpDDY",
  authDomain: "letmeask-9f55a.firebaseapp.com",
  databaseURL: "https://letmeask-9f55a-default-rtdb.firebaseio.com",
  projectId: "letmeask-9f55a",
  storageBucket: "letmeask-9f55a.appspot.com",
  messagingSenderId: "45929310691",
  appId: "1:45929310691:web:f32b58dd5d469e2dbf58d6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database();

export { firebase, auth, database}