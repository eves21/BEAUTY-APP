var contactApp = angular.module('contactApp',[]);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzAeAJaPmsvVo8Oa-fkeESNCHmCQB_h5w",
    authDomain: "beauty-d1046.firebaseapp.com",
    projectId: "beauty-d1046",
    storageBucket: "beauty-d1046.appspot.com",
    messagingSenderId: "1038252505971",
    appId: "1:1038252505971:web:3a793b5d5d965960a2e306"
  };

  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();