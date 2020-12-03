var firebaseConfig = {
  apiKey: "AIzaSyCToyik8gq3vMEkKCQdGJQtzw_-_Roskek",
  authDomain: "randomaps-e23df.firebaseapp.com",
  projectId: "randomaps-e23df",
  storageBucket: "randomaps-e23df.appspot.com",
  messagingSenderId: "249660335211",
  appId: "1:249660335211:web:68adbbdb85ea149ed1bd2e",
  measurementId: "G-CSH4J8ZT2M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
    .then(function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          var usuarioLog = user.uid;
          console.log(usuarioLog); //this returns my user object
          sessionStorage.setItem("UID", usuarioLog);
          location.href = "usuario.html";
        }
      });
    });
}
