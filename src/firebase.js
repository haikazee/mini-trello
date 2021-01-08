import firebase from 'firebase';

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWipUfR72p8cNG032l0hA_vbcKZO6fUfk",
    authDomain: "firestore-tutorial-fireship.firebaseapp.com",
    projectId: "firestore-tutorial-fireship",
    storageBucket: "firestore-tutorial-fireship.appspot.com",
    messagingSenderId: "1051127971899",
    appId: "1:1051127971899:web:6fd908f19cdf1e7ff1dc1e"
  }
  );

export const firestore = firebaseApp.firestore();

export const cardsRef = firestore.collection("cards");
export const tasksRef = firestore.collection("tasks");
export const usersRef = firestore.collection("users");