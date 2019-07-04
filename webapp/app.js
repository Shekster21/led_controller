
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

  var ledStatus,updates;
  const button = document.querySelector("#Button");
  const outputHeader = document.querySelector("#ledStatus");
  var Led = firebase.database().ref().child("/led_cntroller/leds");
  
  
function myApp(){
  Led.on("value",function(snapshot){
    ledStatus = String(snapshot.val().led1);
    console.log(ledStatus);
    outputHeader.innerHTML = "LED Status :" + ledStatus;
    if(ledStatus == "ON"){
      button.innerHTML = "OFF";
    }else if(ledStatus == "OFF"){
      button.innerHTML = "ON";
    }
  });
  button.addEventListener('click',function (){
    console.log(ledStatus);
    if(ledStatus == "ON"){
      updates = {led1:'OFF'};
      console.log("Swithcing off.");
    }else if(ledStatus == "OFF"){
      updates = {led1 :'ON'};
      console.log("Switching on.");
    }
    console.log("button clicked");
    firebase.database().ref('led_cntroller/leds').update(updates);
    return;
  }
  );

}

function getRealTimeValues(){
  Led.on("value",function(snapshot){
    ledStatus = String(snapshot.val().led1);
    console.log(ledStatus);
    outputHeader.innerHTML = "LED Status :" + ledStatus;
    if(ledStatus == "ON"){
      button.innerHTML = "OFF";
    }else if(ledStatus == "OFF"){
      button.innerHTML = "ON";
    }
  });
}