import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig =  {
    apiKey: "AIzaSyCdPRz-AHlt8_T_SXKExXrzJjSJlmaG2Wk",
    authDomain: "parfumsshop-67e34.firebaseapp.com",
    databaseURL: "https://parfumsshop-67e34-default-rtdb.firebaseio.com",
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