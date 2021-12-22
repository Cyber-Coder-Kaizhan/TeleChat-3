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
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    window.location = "TeleChat.html";
}