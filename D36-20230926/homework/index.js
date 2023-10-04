const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDTElPNoVrVFUwetI-TF-RcqpPmBoHZWO4",
  authDomain: "auth-form-eb5ec.firebaseapp.com",
  projectId: "auth-form-eb5ec",
  storageBucket: "auth-form-eb5ec.appspot.com",
  messagingSenderId: "1081952696496",
  appId: "1:1081952696496:web:bbf3e1060266346f156375"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
    
    

function registration(){
  var email=document.getElementById("gmail1").value
  var password=document.getElementById("password1").value
  console.log(email)
  console.log(password)
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    // console.write("you are signed up")
    document.write("you are signed up")
    console.log(result)
    // var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    console.log(error.message)
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ..
  });
    }

    

function login(){
  var email=document.getElementById("gmail").value
  var password=document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    document.write("you are signed in")
    console.log(result)
    // Signed in
    // var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    console.log(error.code)
    document.log(error.message)
    // var errorCode = error.code;
    // var errorMessage = error.message;
  })
  // window.location="home.html"
}

function display(){
  
}


