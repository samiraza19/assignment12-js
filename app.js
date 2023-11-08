
var firebaseConfig = {
    apiKey: "AIzaSyDDAjqWnoScgJdNEg3z0O-A1-P0hTHkNxs",
    authDomain: "authclass-850d0.firebaseapp.com",
    projectId: "authclass-850d0",
    storageBucket: "authclass-850d0.appspot.com",
    messagingSenderId: "843076275648",
    appId: "1:843076275648:web:7a350ba9d221a56dae0c25"
  };
  
  // Initialize Firebase
  var firebase = firebase.initializeApp(firebaseConfig);
  
  
  function gett(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")
  
  
  
    // window.location.href = "dashboard.html"
  
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      alert(" Email verification sent!")
      // ...
    });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  
    
  
  function logIn(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
  console.log(user)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  
  
  
  
  
  
  function forgot(){
    var email = document.getElementById("email")
    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }
  






  var provider = new firebase.auth.GoogleAuthProvider();


 function google(){
    firebase.auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    console.log(user)
        // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
   console.log(errorMessage)
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
 }