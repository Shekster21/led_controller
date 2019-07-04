var firebaseConfig = {
    apiKey: "AIzaSyA6Rn_6EkYbgVMUnSXw1yalqwEDtOzuOSk",
    authDomain: "ledcontroller-3fa45.firebaseapp.com",
    databaseURL: "https://ledcontroller-3fa45.firebaseio.com",
    projectId: "ledcontroller-3fa45",
    storageBucket: "ledcontroller-3fa45.appspot.com",
    messagingSenderId: "1028878559938",
    appId: "1:1028878559938:web:5f555a7487e8e7a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const button = document.querySelector("#Button");
  const outputHeader = document.querySelector("#ledStatus");

  var currLedStatus = firebase.database().ref().child("led_cntroller/leds/led1");

  