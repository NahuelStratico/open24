import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "open24-6bfd2.firebaseapp.com",
    projectId: "open24-6bfd2",
    storageBucket: "open24-6bfd2.appspot.com",
    messagingSenderId: "204473612612",
    appId: "1:204473612612:web:1e93ac49711a796e033f11"
});

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app);
}