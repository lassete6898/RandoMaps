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

function logout() {
  sessionStorage.removeItem("UID");
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        location.href = "login.html";
      },
      function (error) {
        // An error happened.
      }
    );
}
