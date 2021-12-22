var firebaseConfig = {
      apiKey: "AIzaSyBFjZirMagJY_ypLLg0HLwnVlO9PmhhEF4",
      authDomain: "pushpali.firebaseapp.com",
      databaseURL: "https://pushpali.firebaseio.com",
      projectId: "pushpali",
      storageBucket: "pushpali.appspot.com",
      messagingSenderId: "384756082835",
      appId: "1:384756082835:web:14b804867acb47c3ecc566",
      measurementId: "G-000F2Q8097"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Hello World"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "TeleChat_3.html";
}







function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_Names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name",name);
      window.location = "TeleChat_3.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "TeleChat.html";
}