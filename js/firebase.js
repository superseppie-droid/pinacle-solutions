 const firebaseConfig = {
    apiKey: "AIzaSyBP0hC4jj4ViXOioGyD-d-gIOZgVIW9Vhs",
    authDomain: "pinnacle-solutions.firebaseapp.com",
    projectId: "pinnacle-solutions",
    storageBucket: "pinnacle-solutions.firebasestorage.app",
    messagingSenderId: "768528750821",
    appId: "1:768528750821:web:d477e111755ceca4855c0c",
    measurementId: "G-1XNQTMEZSR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);