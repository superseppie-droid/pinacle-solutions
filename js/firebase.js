// firebase.js (compat versie)
const firebaseConfig = {
  apiKey: "AIzaSyBP0hC4jj4ViXOioGyD-d-gIOZgVIW9Vhs",
  authDomain: "pinnacle-solutions.firebaseapp.com",
  projectId: "pinnacle-solutions",
  storageBucket: "pinnacle-solutions.firebasestorage.app",
  messagingSenderId: "768528750821",
  appId: "1:768528750821:web:d477e111755ceca4855c",
  measurementId: "G-1XNQTMEZSR"
};

// Firebase initialiseren (compat)
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();
