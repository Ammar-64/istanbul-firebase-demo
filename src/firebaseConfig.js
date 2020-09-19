import * as firebase from 'firebase';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwj9bgedpr2O6EX-a8RKQB-f5EGzs-7Xs",
    authDomain: "istanbul-firebase-demp.firebaseapp.com",
    databaseURL: "https://istanbul-firebase-demp.firebaseio.com",
    projectId: "istanbul-firebase-demp",
    storageBucket: "istanbul-firebase-demp.appspot.com",
    messagingSenderId: "841341530223",
    appId: "1:841341530223:web:37bd1939d7675ab32d1d9a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();