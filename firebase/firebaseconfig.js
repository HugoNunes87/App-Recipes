import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAuth } from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzCQ5vvdTm7YfthndDQ1Mn9us6gBw_yqs",
    authDomain: "recipe-aea79.firebaseapp.com",
    projectId: "recipe-aea79",
    storageBucket: "recipe-aea79.appspot.com",
    messagingSenderId: "131305294108",
    appId: "1:131305294108:web:2d3a3c63f116b34dd6d2d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth =  getAuth(app);


export default database;