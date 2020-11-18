import firebase from 'firebase'


  var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDL52Aibb6oVNYrUeiBhS0uJV_wmnzMGRQ",
    authDomain: "westheimkontakt.firebaseapp.com",
    databaseURL: "https://westheimkontakt.firebaseio.com",
    projectId: "westheimkontakt",
    storageBucket: "westheimkontakt.appspot.com",
    messagingSenderId: "695336627198",
    appId: "1:695336627198:web:53894c2294dbae36c4eeaf",
    measurementId: "G-XBCR6WKC4L"
  });
  // Initialize Firebase

  firebase.analytics();

  var db = firebaseApp.firestore();

  export { db };