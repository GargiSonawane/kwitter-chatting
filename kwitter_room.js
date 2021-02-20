
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAuEedGpuvVFLXDvv8BYGRCd9ZuijBJst0",
      authDomain: "kwitter-803cf.firebaseapp.com",
      databaseURL: "https://kwitter-803cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-803cf",
      storageBucket: "kwitter-803cf.appspot.com",
      messagingSenderId: "995451351869",
      appId: "1:995451351869:web:635b3418cef23575a38b54",
      measurementId: "G-FXGXHZ0L3G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)'>" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoom(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
 function addRoom(){
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose: "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_page.html";
 }
 user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "welcome " + user_name;

