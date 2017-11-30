import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAZ9iW9br7IT24L2Q8Cs_OhPN9qnAMBU5s",
  authDomain: "expense-tracker-3dc76.firebaseapp.com",
  databaseURL: "https://expense-tracker-3dc76.firebaseio.com",
  projectId: "expense-tracker-3dc76",
  storageBucket: "expense-tracker-3dc76.appspot.com",
  messagingSenderId: "915429280489"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };