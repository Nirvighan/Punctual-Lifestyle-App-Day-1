import firebase from 'firebase';
require ('@firebase/firestore')




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAW6fQvsg-V-e23QeuwnhlOP5typVpRskM",
    authDomain: "punctual-lifestyle-app.firebaseapp.com",
    databaseURL: "https://punctual-lifestyle-app.firebaseio.com",
    projectId: "punctual-lifestyle-app",
    storageBucket: "punctual-lifestyle-app.appspot.com",
    messagingSenderId: "729604845998",
    appId: "1:729604845998:web:93b2348c51a9a7d271d83f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();