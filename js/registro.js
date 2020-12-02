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
firebase.analytics();

var db = firebase.firestore();
var nuevoID;

function registro() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var fecha = document.getElementById("fecha").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      nuevoID = userCredential.user.uid;
      console.log(nuevoID);
      db.collection("usuarios").doc(nuevoID).set({
        nombre: nombre,
        apellidos: apellidos,
        usuario: usuario,
        email: email,
        fecha: fecha
      });
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
    .then(function () {
      location.href = "login.html";
    });
}
