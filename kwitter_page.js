//YOUR FIREBASE LINKS
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
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
         message_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatelike(this.id)'>";
         span_tag = "<span class='glyphicon glyphicon-thumbs-up'> like:" + like + "</span></button><hr>";
         row = name_tag + message_tag + like_button + span_tag;
         document.getElementById("output").innerHTML += row;
//Start code

//End code
      } });  }); }
getData();

function updatelike(id_message){
      button_id = id_message;
      like = document.getElementById(button_id).value;
      update_likes = Number(like)+1;
      firebase.database().ref(room_name).child(id_message).update({
            like:update_likes
      });
}