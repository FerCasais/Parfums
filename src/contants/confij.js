import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { URL_BASE_FIREBASE_REALTIME_DATABASE, FIREBASE_API_KEY } from "./firebase";

const firebaseConfig =  {
    apiKey: FIREBASE_API_KEY,
    authDomain: "parfumsshop-67e34.firebaseapp.com",
    databaseURL: URL_BASE_FIREBASE_REALTIME_DATABASE,
    projectId: "parfumsshop-67e34",
    storageBucket: "parfumsshop-67e34.appspot.com",
    messagingSenderId: "311345332755",
    appId: "1:311345332755:web:754b4485cc52a9c48635e6"

}
if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase()

export { db };