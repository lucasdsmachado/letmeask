import firebase from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

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

export const database = getDatabase();
export const auth = getAuth()