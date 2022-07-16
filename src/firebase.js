import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import configFirestore from "./configFirestore";

firebase.initializeApp(configFirestore);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
