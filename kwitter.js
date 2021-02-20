function adduser(){
    user_name= document.getElementById("login_input").value;
    localStorage.setItem("username",user_name);
    window.location="kwitter_room.html";
}